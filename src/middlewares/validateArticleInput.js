
const validateArticleInput = (req, res, next) => {
  const { headline, description, trackId } = req.body;
  if (!headline || !description || !trackId) {
    return res.status(400).json({ error: 'headline, description and trackId are required.' });
  }
  if (headline.trim() === '' || description.trim() === '') {
    return res.status(400).json({ error: 'headline and description must not be empty.' });
  }
  next();
};

export default validateArticleInput;