import { Request, Response } from "express";
import { UserService } from "../services/userServices";


class UserController{

    static async createUserController(req: Request, res: Response){
        const { id, email, name, last_name } = req.body;

        const user = await UserService.createUserService({id, email, name, last_name});

        return res.json(user);
    }

    static async getUserController(req: Request, res:Response){

        const user_id = req.user_id;

        const user = await UserService.getUserService(user_id);

        return res.json(user);
    }
}

export { UserController };