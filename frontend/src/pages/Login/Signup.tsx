import TitleBar from "../../components/TitleBar";
import Subtitle from "../../components/Subtitle";
import SingUpForm from "../../components/Form/SignUpForm";
import SignupLink from "../../components/SignupLink";
import Button from "../../components/Button";
import { FcGoogle } from "react-icons/fc";
import handleGoogleSignIn from "../../hooks/handleGoogleSignIn";
import { ToastContainer } from "react-toastify";
import "./Login.css";

const Signup = () => {

    return (
        <div className="screen-background ">
            <div className="login-container">
                <TitleBar />
                <Subtitle title="SIGN UP" text="Enter your credentials to create your account"/>
                <SingUpForm />
                <Button 
                    title="Sign up with Google" 
                    onClick={handleGoogleSignIn} 
                    className="google-button" 
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
