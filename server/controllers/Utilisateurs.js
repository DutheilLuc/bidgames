import Utilisateur from "../models/utilisateurModel.js";

export const getAllUtilisateurs = async (req, res) => {
    try {
        const utilisateur = await Utilisateur.findAll();
        res.json(utilisateur);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getUtilisateurById = async (req, res) => {
    try {
        const utilisateur = await Utilisateur.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(utilisateur[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createUtilisateur = async (req, res) => {
    try {
        await Utilisateur.create(req.body);
        res.json({
            "message": "Utilisateur Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateUtilisateur = async (req, res) => {
    try {
        await Utilisateur.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Utilisateur Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteUtilisateur = async (req, res) => {
    try {
        await Utilisateur.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Utilisateur Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}