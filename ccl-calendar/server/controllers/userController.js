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

exports.getUserById = (req, res) => {
  User.findById(req.params.id)
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
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
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
  User.findByIdAndRemove(req.params.id)
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