import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

const handleSignIn = (e, { email, password }: {email: string, password: string}) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential);
    })
    .catch((error) => {
        console.log(error);
    });
};

export default handleSignIn;