import express from "express";
import db from "./config/database.js";
import articlesRoutes from "./routes/articles.route.js";
import utilisateursRoutes from "./routes/utilisateurs.route.js";
import cors from "cors";

const app = express();

try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}

app.use(cors());
app.use(express.json());
app.use('/articles', articlesRoutes);
app.use('/utilisateurs', utilisateursRoutes);

app.listen(5000, () => console.log('Server running at port 5000'));