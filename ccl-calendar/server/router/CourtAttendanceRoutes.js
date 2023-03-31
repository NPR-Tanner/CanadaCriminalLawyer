const express = require('express');
const courtAttendanceRouter = express.Router();
const {
    getAllCourtAttendances, 
    getCourtAttendanceById, 
    createCourtAttendance, 
    updateCourtAttendance, 
    deleteCourtAttendance,
    getCourtAttendanceByUserId,
    getCourtAttendanceByCity
} = require('../controllers/courtAttendanceController');

courtAttendanceRouter.route('/')
  .get(getAllCourtAttendances)
  .post(createCourtAttendance);

courtAttendanceRouter.route('/:id')
  .get(getCourtAttendanceById)
  .patch(updateCourtAttendance)
  .delete(deleteCourtAttendance);

courtAttendanceRouter.route('/user/:user_id')
  .get(getCourtAttendanceByUserId);

courtAttendanceRouter.route('/city/:city')
  .get(getCourtAttendanceByCity);

module.exports = courtAttendanceRouter;