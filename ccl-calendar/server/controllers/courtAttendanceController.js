const CourtAttendance = require('../models/courtAttendance');

exports.getAllCourtAttendances = async (req, res) => {
    try {
      const courtAttendances = await CourtAttendance.find().populate('courtSitting_ID user_ID');
      return res.json(courtAttendances);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Server error occurred' });
    }
  };

exports.getCourtAttendanceById = async (req, res) => {
    const { id } = req.params;

    try {
        const courtAttendance = await CourtAttendance.findById(id).populate('courtSitting_ID user_ID');
        if (!courtAttendance) {
        return res.status(404).json({ message: 'Court attendance not found' });
        }

        return res.json(courtAttendance);
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
};

exports.getCourtAttendanceByUserId = async (req, res) => {
    const { user_id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(user_id)) {
        return res.status(400).json({ error: 'Invalid user ID' });
    }

    try {
      const courtAttendance = await CourtAttendance.find({ user_ID: user_id }).populate('courtSitting_ID');
  
      if (!courtAttendance || courtAttendance.length === 0) {
        return res.status(404).json({ message: 'No court attendance found for user' });
      }
  
      return res.status(200).json(courtAttendance);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Server error occurred' });
    }
};

exports.getCourtAttendanceByCity = async (req, res) => {
    const { city } = req.params;
  
    try {
      const courtSittings = await CourtSitting.find({ city: city }, '_id');
  
      if (!courtSittings || courtSittings.length === 0) {
        return res.status(404).json({ message: 'No court sittings found for city' });
      }
  
      const courtSittingIds = courtSittings.map(courtSitting => courtSitting._id);
  
      const courtAttendance = await CourtAttendance.find({ courtSitting_ID: { $in: courtSittingIds } }).populate('courtSitting_ID');
  
      if (!courtAttendance || courtAttendance.length === 0) {
        return res.status(404).json({ message: 'No court attendance found for city' });
      }
  
      return res.status(200).json(courtAttendance);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Server error occurred' });
    }
};

exports.createCourtAttendance = async (req, res) => {
    const { courtSitting_ID, user_ID, prosecutor, description } = req.body;
  
    try {
      const courtAttendance = new CourtAttendance({ courtSitting_ID, user_ID, prosecutor, description });
      await courtAttendance.save();
      return res.json(courtAttendance);
    } catch (error) {
        console.error(error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.message });
        }
        if (error.name === 'MongoError' && error.code === 11000) {
            return res.status(400).json({ message: 'Court attendance already exists' });
        }
      return res.sendStatus(500);
    }
};

exports.updateCourtAttendance = async (req, res) => {
    const { id } = req.params;
    const { courtSitting_ID, user_ID, prosecutor, description } = req.body;
  
    try {
      const courtAttendance = await CourtAttendance.findByIdAndUpdate(
        id,
        { courtSitting_ID, user_ID, prosecutor, description },
        { new: true },
      );
  
      if (!courtAttendance) {
        return res.status(404).json({ message: 'Court attendance not found' });
      }
  
      return res.json(courtAttendance);
    } catch (error) {
      console.error(error);
      if (error.name === 'ValidationError') {
        return res.status(400).json({ message: error.message });
      }
      if (error.name === 'MongoError' && error.code === 11000) {
        return res.status(400).json({ message: 'Court attendance already exists' });
      }
      return res.sendStatus(500);
    }
};

exports.deleteCourtAttendance = async (req, res) => {
    const { id } = req.params;
  
    try {
      const courtAttendance = await CourtAttendance.findById(id);
  
      if (!courtAttendance) {
        return res.status(404).json({ message: 'Court attendance not found' });
      }
  
      await courtAttendance.remove();
      return res.status(204).json({ message: 'Court attendance deleted' });
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  };