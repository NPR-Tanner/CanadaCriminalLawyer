import mongoose from 'mongoose';

const courtContactSchema = new mongoose.Schema({
    contactId: { type: Number, required: true },
    courtId: { type: Number, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    title: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    fax: { type: String, required: true }
  });

  export default courtContactSchema;