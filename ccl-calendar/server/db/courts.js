import mongoose from 'mongoose';

const courtSchema = new mongoose.Schema({
    courtId: { type: Number, required: true },
    courtType: { type: String, required: true },
    address: { type: String, required: true },
    postalCode: { type: String, required: true },
    city: { type: String, required: true },
    province: { type: String, required: true },
    phone: { type: String, required: true },
    fax: { type: String, required: true }
  });

  export default courtSchema;