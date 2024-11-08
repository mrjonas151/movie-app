import React, { useContext } from "react";
import TitleBar from "../../components/TitleBar/TitleBar";
import Subtitle from "../../components/Subtitle/Subtitle";
import SingUpForm from "../../components/Form/SignUpForm";
import SignupLink from "../../components/SignUp/SignupLink";
import Button from "../../components/Button/Button";
import { FcGoogle } from "react-icons/fc";
import handleGoogleSignIn from "../../hooks/handleGoogleSignIn";
import { ToastContainer } from "react-toastify";
import styles from "./Login.module.css";
import { ColorContext } from "../../contexts/ColorContext";

const Signup: React.FC = () => {
    const colorContext = useContext(ColorContext);

    if (!colorContext) {
        return null;
    }

    const { isRed, toggleColor } = colorContext;

    return (
        <div
            className={`${styles.screenBackground} ${
                isRed ? styles.redBackground : styles.blueBackground
            }`}
        >
            <div className={styles.signUpContainer}>
                <TitleBar title="MovieApp" isRed={isRed} />
                <Subtitle
                    title="SIGN UP"
                    text="Enter your credentials to create your account"
                />
                <SingUpForm isRed={isRed} />
                <Button
                    title="Sign up with Google"
                    onClick={handleGoogleSignIn}
                    className={styles.googleButton}
                    Icon={FcGoogle}
                />
                <SignupLink
                    link="/"
                    title="Already have an account? Sign in"
                    isRed={isRed}
                />
                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    closeOnClick
                    pauseOnFocusLoss
                    pauseOnHover
                />
            </div>
        </div>
    );
};

export default Signup;
