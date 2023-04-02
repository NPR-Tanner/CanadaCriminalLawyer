const express = require('express');
const userRouter = express.Router();

const {getUsers, getUserById, createUser, updateUser, deleteUser} = require('./../controllers/userController');
const { isAuthenticated, isOwner } = require('../middlewares/index');

userRouter.route('/')
  .get(isAuthenticated, getUsers)
  .post(createUser);

userRouter.route('/:id')
  .get(isAuthenticated, getUserById)
  .patch(isAuthenticated, isOwner, updateUser)
  .delete(isAuthenticated, isOwner, deleteUser);

module.exports = userRouter;