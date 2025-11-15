import express from "express";
import * as movieController from "../controllers/movieController.js";

const api = express.Router();

api.get("/movie", movieController.listMovie);
api.post("/movie", movieController.addMovie);
api.put("/movie", movieController.updateMovie);
api.delete("/movie", movieController.deleteMovie);

export default api;