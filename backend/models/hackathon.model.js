import mongoose from 'mongoose';

const hackathonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  location: { type: String, required: true},
  Organization: { type: String, required: true},
  URL: { type: String, required: true},
  team_members: { type: Number, required: true},
}, {
    timestamps: true
});

const Hackathon = mongoose.model('Hackathon', hackathonSchema);
export default Hackathon;