import * as deptController from "../controller/departmentController.js" // Importing controllers file from Controller Folder

import Router from "express"// importing Router() from express module

export const router = Router() // Exporting router url to Main Server.js file

router.post("/department",deptController.addDept)
router.get("/department",deptController.getDept)

router.get("/department/:id",deptController.getOneDept)
// router.get("/department/:id/students",deptController.getAllStudent)
// router.get("/department/:id/staffs",deptController.getAllStaff)

// router.put("/department/:id",deptController.updateDept)
// router.delete("/department/:id",deptController.deleteDept)