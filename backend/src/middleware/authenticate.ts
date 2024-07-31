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
        const decodedToken = await admin.auth().verifyIdToken(idToken, true);
        req.user_id = decodedToken.uid;
        req.user_email = decodedToken.email;

        const user = await admin.auth().getUser(decodedToken.uid);
        if (decodedToken.auth_time * 1000 < Number(user.tokensValidAfterTime)) {
            return res.status(401).send("Token revoked!!!");
        }

        next();
    } catch (error) {
        return res.status(403).send("Error middleware: "+error);
    }
};

export default authenticate;
