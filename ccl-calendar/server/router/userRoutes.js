const express = require('express');
const userRouter = express.Router();

const {getUsers, getUserById, createUser, updateUser, deleteUser} = require('./../controllers/userController');

userRouter.route('/')
  //.get(isAuthenticated, getAllUsers)
  .get(getUsers)
  .post(createUser);

userRouter.route('/:id')
  .get(getUserById)
  .patch(updateUser)
  .delete(deleteUser);
  //.get(isAuthenticated, getUserById)
  //.patch(isAuthenticated, isOwner, updateUser)
  //.delete(isAuthenticated, isOwner, deleteUser);

module.exports = userRouter;
// const { isAuthenticated, isOwner } = require('../middlewares');

/*
router.get('/', userController.getUsers);

router.get('/:id', userController.getUserById);

router.post('/', userController.createUser);

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;

import { getAllUsers, deleteUser, updateUser } from '../controllers/users';
import { isAuthenticated, isOwner } from '../middlewares';

export default (router) => {
  router.get('/users', isAuthenticated, getAllUsers);
  router.delete('/users/:id', isAuthenticated, isOwner, deleteUser);
  router.patch('/users/:id', isAuthenticated, isOwner, updateUser);
};
*/

/*
import express from 'express';

import { getAllUsers, deleteUser, updateUser } from '../controllers/users';
import { isAuthenticated, isOwner } from '../middlewares';

export default (router) => {
  router.get('/users', isAuthenticated, getAllUsers);
  router.delete('/users/:id', isAuthenticated, isOwner, deleteUser);
  router.patch('/users/:id', isAuthenticated, isOwner, updateUser);
};
*/