import express from 'express';
import learningTrackController from '../controllers/learningTrackController.js';

const router = express.Router();

router.post('/', learningTrackController.createLearningTrack);
router.get('/', learningTrackController.getLearningTracks);

export default router;