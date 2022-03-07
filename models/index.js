import { DataTypes, Sequelize } from "sequelize"
import dept from "./department.js"// importing department details from department.js

const sequelize = new Sequelize({
    username: "root",
    password: "root",
    database: "mydata",
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(() => {
    console.log("Database connected");
}).catch((err) => {
    console.log("failed to connect..".err);
})

const db = {}

db.sequelize = sequelize// to sync all the tables in the db object

db.department = dept(sequelize, DataTypes)//adding into db object to define (creating) model and assign the Datatypes of coloumns in the model in department.js model file

db.sequelize.sync({ alter: true }).then(() => {
    console.log("Sync is Done..");
})

export default db// Exporting db to use in the respository