import mongoose from 'mongoose';

const LearningTrackSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  code: { type: String, required: true, unique: true },
  description: { type: String }
});

const LearningTrack = mongoose.model('LearningTrack', LearningTrackSchema);

export default LearningTrack;