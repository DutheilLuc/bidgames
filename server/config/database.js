import { Sequelize } from "sequelize";

const db = new Sequelize('dbtest', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;