const mongoose = require('mongoose');

const courtSittingSchema = new mongoose.Schema({
  courtHouse: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Court',
  },
  court_type: {
    type: String,
    enum: ['Provincial Court', 'Kings Bench', 'Appeal Court'],
    required: true
  },
  court_room: {
    type: Number,
    required: true
  },
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
  },
  time: {
    type: String,
    required: true
  }
});

const CourtSitting = mongoose.model('CourtSitting', courtSittingSchema);

module.exports = CourtSitting;