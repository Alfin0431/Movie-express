import express from "express"
import api from "./routes/api.js"
<<<<<<< HEAD
import database from "./config/database.js"
import cors from "cors"
import {APP_PORT} from "./config/config.js"
=======
import { database } from "./config/database.js"
>>>>>>> ecd8b859ad9c9aecd54a359782823121b3962b72

const app = express()
app.use(express.json())
app.use("/api", api)

<<<<<<< HEAD
app.use(cors())
app.use(express.json())
app.use("/api", api)

app.get("/", (req, res)=> {
    res.status(200).json({
        message :"OK"
    })
})
=======
>>>>>>> ecd8b859ad9c9aecd54a359782823121b3962b72

app.listen(3000, () => {
    database()
    console.log('Aplikasi berjalan di http://localhost:3000')
})