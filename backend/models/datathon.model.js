import mongoose from 'mongoose';

const datathonSchema = new mongoose.Schema({
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

const Datathon = mongoose.model('Datathon', datathonSchema);
export default Datathon;
