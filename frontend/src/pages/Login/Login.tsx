import TitleBar from "../../components/TitleBar/TitleBar";
import Subtitle from "../../components/Subtitle/Subtitle";
import SignInForm from "../../components/Form/SignInForm";
import Button from "../../components/ButtonForm/Button";
import SignupLink from "../../components/SignUp/SignupLink";
import handleGoogleSignIn from "../../hooks/handleGoogleSignIn";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer } from "react-toastify";
import styles from "./Login.module.css";

const Login = () => {

    return (
        <div className={styles.screenBackground}>
            <div className={styles.loginContainer}>
                <TitleBar title="MovieApp"/>
                <Subtitle title="SIGN IN" text="Enter your credentials to access your account"/>
                <SignInForm />
                <Button 
                    title="Sign up with Google" 
                    onClick={handleGoogleSignIn} 
                    className={styles.googleButton} 
                    Icon={FcGoogle}
                />
                <SignupLink link="/signup" title="Don't have an account yet? Sign up"/>
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

export default Login;
