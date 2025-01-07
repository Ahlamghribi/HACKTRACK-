import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  profession: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  savedEvents: { type: [String], default: [] }, // Array of event IDs
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);
export default User;