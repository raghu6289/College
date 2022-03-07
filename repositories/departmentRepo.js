import db from "../models/index.js" // Importing tables details from index.js

const Dept = db.department// db.tablename which we saved in the index.js file

export const add = async (dept) => {
    return await Dept.create(dept)
}

// Exporting into Service Folder

export const getDetails = async (dept) => {
    return await Dept.findAll({ dept })
}


export const getOneDetail = async (id) => {
    return await Dept.findAll({ where: { id: id } })
}


// Repository -> Service -> Controller -> Router