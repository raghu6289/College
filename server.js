import express from "express"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


import { router } from "./routes/deptRouter.js"
import index from "./models/index.js"

app.use("/api/", router)

//PORT

const PORT = 3000

//server

app.listen(PORT, () => { console.log("server is running at port ", PORT) })
