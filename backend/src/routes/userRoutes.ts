import { Router } from "express";
import { UserController } from "../controllers/userController";
import authenticate from "../middleware/authenticate";

const router = Router();

router.get("/", authenticate, UserController.getUserController);

router.post("/", UserController.createUserController);

router.post("/movies", authenticate, UserController.addMovieController); 

router.get("/movies", authenticate, UserController.listMoviesController); //aq 

router.delete("/movies/:id", authenticate, UserController.deleteMovieController); 

router.put("/movies/:id", authenticate, UserController.updateMovieController);

router.get("/movies/:id", authenticate, UserController.getMovieByIdController);

export default router;