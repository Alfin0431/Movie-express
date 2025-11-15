import express from "express"
import api from "./routes/api.js"
import database from "./config/database.js"
import cors from "cors"
import {APP_PORT} from "./config/config.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api", api)

app.get("/", (req, res)=> {
    res.status(200).json({
        message :"OK"
    })
})

app.listen(3000,() =>{
    console.log('App berjalan di http://localhost:3000');
})