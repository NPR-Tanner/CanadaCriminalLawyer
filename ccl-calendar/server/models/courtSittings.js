const mongoose = require('mongoose');

const courtSittingSchema = new mongoose.Schema({
  courtHouse: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Court',
  }, /*
  court_type: {
    type: String,
    enum: ['Provincial Court', 'Kings Bench', 'Appeal Court'],
    required: true
  },
  court_room: {
    type: Number
    //required: true
  },*/
  month: {
    type: Number,
    required: true
  },
  day: {
    type: Number,
    required: true
  },
  year: {
    type: Number,
    required: true
  }/*, I'd rather place this in the courtAttendance so I can group people easier
  time: {
    type: String,
    enum: ['AM', 'PM'],
    required: true
  }*/
});

courtSittingSchema.virtual('date').get(function() {
  return new Date(this.year, this.month - 1, this.day);
});

const CourtSitting = mongoose.model('CourtSitting', courtSittingSchema);

// Choosing to separate month, day, year into different fields since it makes grouping data by specific parts of the date easier. 

module.exports = CourtSitting;