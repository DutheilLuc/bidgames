import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Utilisateur = db.define('utilisateurs',{
    REGION:{
        type: DataTypes.STRING
    },
    DEPARTEMENT:{
        type: DataTypes.STRING
    },
    ADRESSE:{
        type: DataTypes.STRING
    },
    VILLES:{
        type: DataTypes.STRING
    },
    CODE_POSTAL:{
        type: DataTypes.DOUBLE
    },
    PRENOM:{
        type: DataTypes.STRING
    },
    DATE_NAISSANCE:{
        type: DataTypes.DATE
    },
    EMAIL:{
        type: DataTypes.STRING
    },
    CARTE_BANCAIRE:{
        type: DataTypes.DECIMAL
    }
}, {
    freezeTableName: true
});

export default Utilisateur;