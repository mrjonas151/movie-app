import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../services/firebase";
import "react-toastify/dist/ReactToastify.css";

const handleGoogleSignIn = (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
    .then((result) => {
        console.log(result);
        toast.success("Signed in successfully");
    })
    .catch((error) => {
        console.log(error);
        toast.error("Failed to sign in");
    }); 
};

export default handleGoogleSignIn;