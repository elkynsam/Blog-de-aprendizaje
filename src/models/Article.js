import mongoose from 'mongoose';

const ArticleSchema = new mongoose.Schema({
  headline: { type: String, required: true },
  description: { type: String, required: true },
  track: { type: mongoose.Schema.Types.ObjectId, ref: 'LearningTrack', required: true },
  publishedAt: { type: Date, default: Date.now }
});

const Article = mongoose.model('Article', ArticleSchema);

export default Article;