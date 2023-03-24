import mongoose from 'mongoose';

const calendarSubmissionSchema = new mongoose.Schema({
    eventId: { type: Number, required: true },
    courtSittingId: { type: Number, required: true },
    userId: { type: Number, required: true },
    province: { type: String, required: true },
    city: { type: String, required: true },
    court: { type: String, required: true },
    courtHouse: { type: String, required: true },
    courtRoom: { type: String, required: true },
    prosecutor: { type: String, required: true },
    day: { type: Number, required: true },
    month: { type: Number, required: true },
    year: { type: Number, required: true },
    hour: { type: Number, required: true },
    time: { type: String, required: true }
  });

  export default calendarSubmissionSchema;