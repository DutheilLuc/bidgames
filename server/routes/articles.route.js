import express from "express";

import {
    getAllArticles,
    createArticle,
    getArticleById,
    updateArticle,
    deleteArticle
} from "../controllers/Articles.js";

const router = express.Router();

router.get('/', getAllArticles);
router.get('/:id', getArticleById);
router.post('/', createArticle);
router.patch('/:id', updateArticle);
router.delete('/:id', deleteArticle);

export default router;