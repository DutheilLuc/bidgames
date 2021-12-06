import Article from "../models/articleModel.js";

export const getAllArticles = async (req, res) => {
    try {
        const article = await Article.findAll();
        res.json(article);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getArticleById = async (req, res) => {
    try {
        const article = await Article.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(article[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createArticle = async (req, res) => {
    try {
        await Article.create(req.body);
        res.json({
            "message": "Article Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateArticle = async (req, res) => {
    try {
        await Article.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Article Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteArticle = async (req, res) => {
    try {
        await Article.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Article Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}