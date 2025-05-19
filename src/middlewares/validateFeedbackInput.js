const validateFeedbackInput = (req, res, next) => {
  let { authorName, message } = req.body;
  if (!authorName || !message) {
    return res.status(400).json({ error: 'authorName and message are required.' });
  }
  if (authorName.trim() === '' || message.trim() === '') {
    return res.status(400).json({ error: 'authorName and message must not be empty.' });
  }
  next();
};

export default validateFeedbackInput;