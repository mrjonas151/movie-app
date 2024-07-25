import TitleBar from "../components/TitleBar";
import Subtitle from "../components/Subtitle";
import LoginForm from "../components/LoginForm";
import SignupLink from "../components/SignupLink";
import "./Login.css";

const Login = () => {

    return (
        <div className="login-container">
            <TitleBar />
            <Subtitle />
            <LoginForm />
            <SignupLink />
        </div>
    );
};

export default Login;
