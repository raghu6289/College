import * as dept from "../services/departmentService.js" // Import from service folder

// Creating APi's

// Repository -> Service -> Controller -> Router

// Export to router folder for url creation

// 1. Add Department

export const addDept = async (req, res) => {
    const savedept = await dept.add(req.body)
    return res.status(200).send(savedept)
} 

// 2. Get All Department Details

export const getDept = async (req, res) => {
    const savedept = await dept.getAll()
    return res.status(200).send(savedept)
}


// 3. Get Single Department Details

export const getOneDept = async (req, res) => {
    let id=req.params.id
    const savedept = await dept.getOne(id)
    return res.status(200).send(savedept)
}
