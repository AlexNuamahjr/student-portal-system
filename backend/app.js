import express from "express";
import dotenv from "dotenv";
dotenv.config();
import db from "./database/models/index.js";
const PORT = process.env.PORT || 2343;

const app = express();


const startServer = async ()=>{
    try {
        await db.sequelize.sync();
        app.listen(PORT, ()=>{
            console.log(`Server is running on http://localhost:${PORT}`); 
        })
    } catch (error) {
        console.error(error)
    }
}

startServer();
