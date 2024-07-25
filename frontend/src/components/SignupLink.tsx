import { Link } from "react-router-dom";
import "./SignupLink.css";

const SignupLink = () => {
    
    return (
        <div className="signup-container">
           <Link className="link-signup" to="/signup">Don't have an account yet? Sign up here</Link>
        </div>
    );
};

export default SignupLink;
