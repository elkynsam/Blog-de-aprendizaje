import Feedback from '../models/Feedback.js';

const addFeedback = async (req, res) => {
  try {
    let { authorName, message } = req.body;
    const { articleId } = req.params;
    authorName = authorName ? authorName.trim() : '';
    message = message ? message.trim() : '';

    if (!authorName || !message) {
      return res.status(400).json({ error: 'Name and message must not be empty.' });
    }
    const feedback = new Feedback({ authorName, message, article: articleId });
    await feedback.save();
    res.status(201).json(feedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getFeedbacksByArticle = async (req, res) => {
  try {
    const { articleId } = req.params;
    const feedbacks = await Feedback.find({ article: articleId }).sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default { addFeedback, getFeedbacksByArticle };