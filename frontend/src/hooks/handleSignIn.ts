import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const handleSignIn = ({
    email,
    password,
}: {
    email: string;
    password: string;
}) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            toast.success("Signed in successfully");
        })
        .catch((error) => {
            console.log(error.message);
            toast.error("Failed to sign in");
        });
};

export default handleSignIn;
