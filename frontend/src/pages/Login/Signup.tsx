import TitleBar from "../../components/TitleBar";
import Subtitle from "../../components/Subtitle";
import LoginForm from "../../components/LoginForm";
import SignupLink from "../../components/SignupLink";
import SignButton from "../../components/SignButton";
import { FcGoogle } from "react-icons/fc";
import handleGoogleSignIn from "../../hooks/handleGoogleSignIn";
import handleSignIn from "../../hooks/handleSignIn";
import "./Login.css";

const Signup = () => {

    return (
        <div className="login-container">
            <TitleBar />
            <Subtitle title="SIGN UP" text="Enter your credentials to create your account"/>
            <LoginForm />
            <SignButton 
                title="SIGN UP" 
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

export default Signup;
