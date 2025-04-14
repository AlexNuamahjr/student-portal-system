import express from "express";
import dotenv from "dotenv";
dotenv.config();
import sequelize from "./database/dbConnect.js";
const PORT = process.env.PORT || 2343;

const app = express();


const startServer = async ()=>{
    try {
        await sequelize.authenticate()
        app.listen(PORT, ()=>{
            console.log(`Server is running on http://localhost:${PORT}`); 
        })
    } catch (error) {
        console.error(error)
    }
}

startServer();
