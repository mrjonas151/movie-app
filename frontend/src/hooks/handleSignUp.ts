import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const handleSignUp = async ( { email, password }: {email: string, password: string}) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        const userObj = {
            id: user.uid,
            email: user.email,
            name: user.displayName || "Name",
            last_name: user.displayName || "Surname",
        };

        try {
            await axios.post("http://localhost:3333/users", userObj);
            console.log(userCredential);
            console.log(userObj);
            toast.success("Account created!");
        } catch (error) {
            console.log(error);
            toast.error("Failed to Sign up");
        }
    } catch (error) {
        console.log(error);
        toast.error("Failed to sign up");
    }
};

export default handleSignUp;