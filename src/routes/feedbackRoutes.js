import express from 'express';
import feedbackController from '../controllers/feedbackController.js';
import validateFeedbackInput from '../middlewares/validateFeedbackInput.js';

const router = express.Router();

router.post('/:articleId', validateFeedbackInput, feedbackController.addFeedback);
router.get('/:articleId', feedbackController.getFeedbacksByArticle);

export default router;