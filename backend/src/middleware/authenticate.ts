import { Request, Response, NextFunction } from "express";
import admin from "../config/firebase"; 

export interface CustomRequest extends Request {
    user_id?: string;
    user_email?: string;
}

const authenticate = async (req: CustomRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers["authorization"];
    const idToken = authHeader && authHeader.split(" ")[1];

    if (!idToken) {
        return res.status(401).send("Unauthorized");
    }

    try {
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        req.user_id = decodedToken.uid;
        req.user_email = decodedToken.email;

        next();
    } catch (error) {
        return res.status(403).send("Error: "+error);
    }
};

export default authenticate;
