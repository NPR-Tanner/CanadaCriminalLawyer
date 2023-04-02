const User = require('./../models/user');

exports.getUsers = (req, res) => {
  User.find()
    .then((users) => {
      if (!users || users.length === 0) {
        return res.status(404).json({
          message: 'No users found'
        });
      }

      return res.status(200).json(users);
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).json({
        error: 'Server error occurred'
      });
    });
};

exports.getUserByEmail = (req, res) => {
  const {email} = req.params;
  User.findOne({email});
}

// Use this to confirm whether user is logged in or not
exports.getUserBySessionToken = (req, res) => {
  const {sessionToken} = req.params;
  UserModel.findOne({
    'authentication.sessionToken': sessionToken,
  });
}

exports.getUserById = (req, res) => {
  const {id} = req.params;
  User.findById(id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          message: 'User not found'
        });
      }

      return res.status(200).json(user);
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).json({
        error: 'Server error occurred'
      });
    });
};

exports.createUser = (req, res) => {
  const user = new User(req.body);
  user.save()
    .then((user) => res.json(user))
    .catch((error) => {
      console.error(error);
      return res.status(500).json({
        error: 'Server error occurred'
      });
    });
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { values } = req.body;

  User.findByIdAndUpdate(id, values, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          message: 'User not found'
        });
      }

      return res.status(200).json(user);
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).json({
        error: 'Server error occurred'
      });
    });
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  User.findByIdAndDelete(id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          message: 'User not found'
        });
      }

      return res.status(200).json({
        message: 'User deleted'
      });
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).json({
        error: 'Server error occurred'
      });
    });
};