import * as departmentRepo from "../repositories/departmentRepo.js" // importing from repositories folder

export const add = async (dept) => {
   return await departmentRepo.add(dept)
}
// Exporting to controllers folder

export const getAll = async () => {
   return await departmentRepo.getDetails()
}

export const getOne = async (id) => {
   return await departmentRepo.getOneDetail(id)
}

// Repository -> Service -> Controller -> Router