import LearningTrack from '../models/LearningTrack.js';

const allowedTracks = ['Practicas', 'Taller', 'Tecno'];

const validateLearningTrack = async (req, res, next) => {
  const { trackId } = req.body;
  if (!trackId) return res.status(400).json({ error: 'trackId is required.' });

  try {
    const track = await LearningTrack.findById(trackId);
    if (!track) {
      return res.status(404).json({ error: 'Learning track not found.' });
    }
    if (!allowedTracks.includes(track.name)) {
      return res.status(400).json({ error: 'Invalid learning track. Allowed: Practicas, Taller, Tecno.' });
    }
    req.learningTrack = track;
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default validateLearningTrack;