import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Article = db.define('articles',{
    title:{
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.DOUBLE
    }
},{
    freezeTableName: true
});

export default Article;