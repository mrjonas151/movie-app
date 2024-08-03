import TitleBar from "../../components/TitleBar/TitleBar";
import Subtitle from "../../components/Subtitle/Subtitle";
import SignInForm from "../../components/Form/SignInForm";
import Button from "../../components/Button/Button";
import SignupLink from "../../components/SignUp/SignupLink";
import handleGoogleSignIn from "../../hooks/handleGoogleSignIn";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer } from "react-toastify";
import styles from "./Login.module.css";
import ToggleButton from "../../components/ToggleButton/ToggleButton";
import { useState } from "react";

const Login = () => {
    const [isRed, setIsRed] = useState<boolean>(true);

    const toggleColor = () => {
        setIsRed(!isRed);
    };

    return (
        <div
            className={`${styles.screenBackground} ${
                isRed ? styles.redBackground : styles.blueBackground
            }`}
        >
            <div className={styles.loginContainer}>
                <TitleBar title="MovieApp" isRed={isRed} />
                <ToggleButton isRed={isRed} toggleColor={toggleColor} />
                <Subtitle
                    title="SIGN IN"
                    text="Enter your credentials to access your account"
                />
                <SignInForm isRed={isRed} />
                <Button
                    title="Sign up with Google"
                    onClick={handleGoogleSignIn}
                    className={styles.googleButton}
                    Icon={FcGoogle}
                />
                <SignupLink
                    link="/signup"
                    title="Don't have an account yet? Sign up"
                    isRed={isRed}
                />
                <ToastContainer>
                    position="top-center" autoClose={3000}
                    hideProgressBar={false}
                    closeOnClick pauseOnFocusLoss pauseOnHover
                </ToastContainer>
            </div>
        </div>
    );
};

export default Login;
