import TitleBar from "../../components/TitleBar";
import Subtitle from "../../components/Subtitle";
import LoginForm from "../../components/LoginForm";
import SignButton from "../../components/SignButton";
import SignupLink from "../../components/SignupLink";
import handleGoogleSignIn from "../../hooks/handleGoogleSignIn";
import handleSignIn from "../../hooks/handleSignIn";
import { FcGoogle } from "react-icons/fc";
import "./Login.css";

const Login = () => {

    return (
        <div className="login-container">
            <TitleBar />
            <Subtitle title="SIGN IN" text="Enter your credentials to access your account"/>
            <LoginForm />
            <SignButton 
                title="SIGN IN" 
                onClick={handleSignIn} 
                className="signin-button"
            />
            <SignButton 
                title="Sign up with Google" 
                onClick={handleGoogleSignIn} 
                className="google-button" 
                Icon={FcGoogle}
            />
            <SignupLink />
        </div>
    );
};

export default Login;
