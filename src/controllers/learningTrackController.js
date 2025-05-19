import LearningTrack from '../models/LearningTrack.js';

const createLearningTrack = async (req, res) => {
  try {
    const { name, code, description } = req.body;
    if (!name || !code) return res.status(400).json({ error: 'Name and code are required.' });
    const exists = await LearningTrack.findOne({ $or: [{ name }, { code }] });
    if (exists) return res.status(400).json({ error: 'Name or code already exists.' });
    const track = new LearningTrack({ name, code, description });
    await track.save();
    res.status(201).json(track);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getLearningTracks = async (req, res) => {
  try {
    const tracks = await LearningTrack.find();
    res.json(tracks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default { createLearningTrack, getLearningTracks };