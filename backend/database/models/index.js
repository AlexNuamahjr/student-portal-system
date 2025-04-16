import User from "./userModel.js";
import Assignment from "./assignmentModel.js";
import sequelize from "../dbConnect.js";

User.hasMany(Assignment, {foreignKey: "studentId"});
Assignment.belongsTo(User, {foreignKey: "studentId"});

const db = {
    User,
    Assignment,
    sequelize
};

export default db;
