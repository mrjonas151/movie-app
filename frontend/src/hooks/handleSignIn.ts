import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

const handleSignIn = ( { email, password }: {email: string, password: string}) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential);
        window.location.href = "/dashboard";
    })
    .catch((error) => {
        console.log(error.message);
    });
};

export default handleSignIn;