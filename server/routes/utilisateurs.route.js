import express from "express";

import {
    getAllUtilisateurs,
    createUtilisateur,
    getUtilisateurById,
    updateUtilisateur,
    deleteUtilisateur
} from "../controllers/Utilisateurs.js";


const router = express.Router();

router.get('/', getAllUtilisateurs);
router.get('/:id', getUtilisateurById);
router.post('/', createUtilisateur);
router.patch('/:id', updateUtilisateur);
router.delete('/:id', deleteUtilisateur);



export default router;