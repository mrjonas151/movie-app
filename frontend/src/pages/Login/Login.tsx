import TitleBar from "../../components/TitleBar";
import Subtitle from "../../components/Subtitle";
import SignInForm from "../../components/Form/SignInForm";
import Button from "../../components/Button";
import SignupLink from "../../components/SignupLink";
import handleGoogleSignIn from "../../hooks/handleGoogleSignIn";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer } from "react-toastify";
import "./Login.css";

const Login = () => {

    return (
        <div className="screen-background">
            <div className="login-container">
                <TitleBar />
                <Subtitle title="SIGN IN" text="Enter your credentials to access your account"/>
                <SignInForm />
                <Button 
                    title="Sign up with Google" 
                    onClick={handleGoogleSignIn} 
                    className="google-button" 
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
