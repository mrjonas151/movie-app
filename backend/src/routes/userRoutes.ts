import { Router } from "express";
import { UserController } from "../controllers/userController";
import authenticate from "../middleware/authenticate";

const router = Router();

router.get("/", authenticate, UserController.getUserController);

router.post("/", UserController.createUserController);

router.post("/favorites", authenticate, UserController.addFavoriteMovie);

router.get("/favorites", authenticate, UserController.listFavoriteMovies);


export default router;