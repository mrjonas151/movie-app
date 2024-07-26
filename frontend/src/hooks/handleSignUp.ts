import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const handleSignUp = ( { email, password }: {email: string, password: string}) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential);
        toast.success("Signed in successfully");
    })
    .catch((error) => {
        console.log(error.code, error.message);
        toast.error("Failed to sign in");
    });
};

export default handleSignUp;