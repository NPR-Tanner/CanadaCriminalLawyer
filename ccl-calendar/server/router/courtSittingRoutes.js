const express = require('express');
const courtSittingRouter = express.Router();
const {getCourtSittings, createCourtSitting, getCourtSittingById, updateCourtSitting, deleteCourtSitting} = require('./../controllers/courtSittingController');

courtSittingRouter.route('/')
  .get(getCourtSittings)
  .post(createCourtSitting);

courtSittingRouter.route('/:id')
  .get(getCourtSittingById)
  .patch(updateCourtSitting)
  .delete(deleteCourtSitting);

module.exports = courtSittingRouter;