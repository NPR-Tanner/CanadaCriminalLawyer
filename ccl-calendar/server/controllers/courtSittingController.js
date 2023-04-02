const CourtSitting = require('./../models/courtSittings');

exports.getCourtSittings = async (req, res) => {
  try {
    const courtSittings = await CourtSitting.find().populate('courtHouse', 'city province');
    return res.status(200).json(courtSittings);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error occurred' });
  }
};

// Retrieve all court sittings (cities) for a particular date
exports.getCourtSittingByDate = async (req, res) => {
  const courtSittings = await CourtSitting.find({ date: date });
}

exports.createCourtSitting = async (req, res) => {
  try {
    const courtSitting = new CourtSitting(req.body);
    const savedCourtSitting = await courtSitting.save();
    return res.status(201).json(savedCourtSitting);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error occurred' });
  }
};

exports.getCourtSittingById = async (req, res) => {
  const { id } = req.params;

  try {
    const courtSitting = await CourtSitting.findById(id).populate('courtHouse', 'city province');
    if (!courtSitting) {
      return res.status(404).json({ message: 'Court sitting not found' });
    }

    return res.status(200).json(courtSitting);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error occurred' });
  }
};

exports.updateCourtSitting = async (req, res) => {
  const { id } = req.params;

  try {
    const courtSitting = await CourtSitting.findByIdAndUpdate(id, req.body, { new: true }).populate('court_ID', 'city province');

    if (!courtSitting) {
      return res.status(404).json({ message: 'Court sitting not found' });
    }

    return res.status(200).json(courtSitting);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error occurred' });
  }
};

exports.deleteCourtSitting = async (req, res) => {
    const { id } = req.params;
  
    try {
      const courtSitting = await CourtSitting.findByIdAndDelete(id);
  
      if (!courtSitting) {
        return res.status(404).json({ message: 'Court sitting not found' });
      }
  
      return res.status(204).json({ message: 'Court sitting deleted' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Server error occurred' });
    }
  };