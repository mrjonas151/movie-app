import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

const handleSignUp = ( { email, password }: {email: string, password: string}) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential);
    })
    .catch((error) => {
        console.log(error.code, error.message);
    });
};

export default handleSignUp;