import express from "express";
import * as movieController from "../controllers/movieController.js";
import * as userController from "../controllers/userController.js";
import { authenticateToken } from "../middlewares/authenticateToken.js";

const api = express.Router();

api.post("/signin", userController.signIn);
api.post("/signup", userController.signUp);

api.get("/movie", authenticateToken, movieController.listMovie);
api.get("/movie/:id", authenticateToken, movieController.detailMovie)
api.post("/movie", authenticateToken, movieController.createNewMovie);
api.put("/movie/:id", authenticateToken, movieController.updateMovie);
api.delete("/movie/:id", authenticateToken, movieController.deleteMovie);

export default api;
