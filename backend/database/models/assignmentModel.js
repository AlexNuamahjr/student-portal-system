import { DataTypes } from "sequelize";
import sequelize from "../dbConnect.js";

const Assignment = sequelize.define("Assingment", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fileUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    submitedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    studentId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true
})

export default Assignment;