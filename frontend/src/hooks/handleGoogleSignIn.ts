import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../services/firebase";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const handleGoogleSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();

    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        const [name, last_name] = user.displayName!.split(" ", 2);

        const userPhoto = user.photoURL;

        const userObj = {
            id: user.uid,
            email: user.email,
            name: name || "",
            last_name: last_name || "",
        };

        try {
            await axios.post("http://localhost:3333/users", userObj);

            toast.success("Signed in successfully");
        } catch (error) {
            console.log(error);
            toast.error("Signed in, but failed to save user to database");
        }
    } catch (error) {
        console.log(error);
        toast.error("Failed to sign in");
    }
};

export default handleGoogleSignIn;
