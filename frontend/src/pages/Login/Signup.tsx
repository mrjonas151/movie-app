import TitleBar from "../../components/TitleBar";
import Subtitle from "../../components/Subtitle";
import SingUpForm from "../../components/Form/SignUpForm";
import SignupLink from "../../components/SignupLink";
import Button from "../../components/Button";
import { FcGoogle } from "react-icons/fc";
import handleGoogleSignIn from "../../hooks/handleGoogleSignIn";
import { ToastContainer } from "react-toastify";
import styles from "./Login.module.css";

const Signup = () => {

    return (
        <div className={styles.screenBackground}>
            <div className={styles.signUpContainer}>
                <TitleBar title="MovieApp"/>
                <Subtitle title="SIGN UP" text="Enter your credentials to create your account"/>
                <SingUpForm />
                <Button 
                    title="Sign up with Google" 
                    onClick={handleGoogleSignIn} 
                    className={styles.googleButton} 
                    Icon={FcGoogle}
                />
                <SignupLink link="/" title="Alredy have an account? Sign in"/>
                <ToastContainer>
                    position="top-center" 
                    autoClose={3000}
                    hideProgressBar={false}
                    closeOnClick 
                    pauseOnFocusLoss 
                    pauseOnHover
                </ToastContainer>
            </div>
        </div>
        
    );
};

export default Signup;
