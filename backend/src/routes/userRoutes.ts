import { Router } from "express";
import { UserController } from "../controllers/userController";
import authenticate from "../middleware/authenticate";

const router = Router();

router.get("/", authenticate, UserController.getUserController);

router.post("/", UserController.createUserController);


export default router;