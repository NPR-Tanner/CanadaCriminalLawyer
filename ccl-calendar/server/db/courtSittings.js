import mongoose from 'mongoose';

const courtSittingSchema = new mongoose.Schema({
    courtSittingId: { type: Number, required: true },
    courtId: { type: Number, required: true },
    courtRoom: { type: String, required: true },
    month: { type: Number, required: true },
    day: { type: Number, required: true },
    year: { type: Number, required: true },
    time: { type: String, required: true }
  });

  export default courtSittingSchema;