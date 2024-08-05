import React, { useContext } from "react";
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
import { ColorContext } from "../../contexts/ColorContext";

const Login: React.FC = () => {
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
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;
