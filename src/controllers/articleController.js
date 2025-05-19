import Article from '../models/Article.js';
import LearningTrack from '../models/LearningTrack.js';

const createArticle = async (req, res) => {
  try {
    const { headline, description, trackId } = req.body;
    if (!headline || !description || !trackId) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    // Validar que el track exista
    const track = await LearningTrack.findById(trackId);
    if (!track) {
      return res.status(404).json({ error: 'Learning track not found.' });
    }
    const article = new Article({ headline, description, track: trackId });
    await article.save();
    res.status(201).json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getArticles = async (req, res) => {
  try {
    const { trackId } = req.query;
    let filter = {};
    if (trackId) filter.track = trackId;
    const articles = await Article.find(filter)
      .populate('track')
      .sort({ publishedAt: -1 });
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id).populate('track');
    if (!article) return res.status(404).json({ error: 'Article not found.' });
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default { createArticle, getArticles, getArticleById };