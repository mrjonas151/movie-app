import { Request, Response } from "express";
import { UserService } from "../services/userServices";
import { CustomRequest } from "../middleware/authenticate";

class UserController{

    static async createUserController(req: Request, res: Response){
        const { id, email, name, last_name } = req.body;

        const user = await UserService.createUserService({id, email, name, last_name});

        return res.json(user);
    }

    static async getUserController(req: CustomRequest, res:Response){

        const user_id = req.user_id;

        if (!user_id) {
            return res.status(400).json({ error: "User Id undefined" });
        }

        const user = await UserService.getUserService(user_id);

        return res.json(user);
    }
}

export { UserController };