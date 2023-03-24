import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userId: { type: Number, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    province: { type: String, required: true },
    city: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String }
  });

  export default userSchema;