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

    static async addFavoriteMovie(req: CustomRequest, res: Response){
        const { movie_id } = req.body;
        const user_id = req.user_id;

        if (!user_id || !movie_id) {
            return res.status(400).json({ error: "User or Movie Id undefined" });
        }

        try {
            const favorite = await UserService.addFavoriteMovie(user_id, movie_id);
            return res.status(201).json(favorite);
        } catch (error) {
            return res.status(500).json({ error: "Error adding favorite movie" });
        }
    }

    static async listFavoriteMovies(req: CustomRequest, res: Response) {
        const user_id = req.user_id;

        if (!user_id) {
            return res.status(400).json({ error: "User ID is required" });
        }

        try {
            const favorites = await UserService.listFavoriteMovies(user_id);
            return res.status(200).json(favorites);
        } catch (error) {
            return res.status(500).json({ error: "Error listing favorite movies" });
        }
    }
}

export { UserController };