import express from 'express';
import articleController from '../controllers/articleController.js';
import validateArticleInput from '../middlewares/validateArticleInput.js';
import validateLearningTrack from '../middlewares/validateLearningTrack.js';

const router = express.Router();

router.post('/', validateArticleInput, validateLearningTrack, articleController.createArticle);
router.get('/', articleController.getArticles);
router.get('/:id', articleController.getArticleById);

export default router;