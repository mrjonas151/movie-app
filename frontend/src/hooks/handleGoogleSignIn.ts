import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../services/firebase";

const handleGoogleSignIn = (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    }); 
};

export default handleGoogleSignIn;