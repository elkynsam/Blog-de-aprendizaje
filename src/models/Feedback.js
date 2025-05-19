import mongoose from 'mongoose';

const FeedbackSchema = new mongoose.Schema({
  authorName: { type: String, required: true },
  message: { type: String, required: true },
  article: { type: mongoose.Schema.Types.ObjectId, ref: 'Article', required: true },
  createdAt: { type: Date, default: Date.now }
});

const Feedback = mongoose.model('Feedback', FeedbackSchema);

export default Feedback;