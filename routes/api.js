<<<<<<< HEAD
import express from "express";
import * as movieController from "../controllers/movieController.js";

const api = express.Router();

api.get("/movie", movieController.listMovie);
api.post("/movie", movieController.addMovie);
api.put("/movie", movieController.updateMovie);
api.delete("/movie", movieController.deleteMovie);

export default api;
=======
import express from "express"
import * as movieController from "../controllers/movieController.js"

const api = express.Router()

api.get("/movie", movieController.listMovie)
api.post("/movie", movieController.createNewMovie)
api.put("/movie/:id", movieController.updateMovie)
api.delete("/movie/:id", movieController.deleteMovie)

export default api
>>>>>>> ecd8b859ad9c9aecd54a359782823121b3962b72
