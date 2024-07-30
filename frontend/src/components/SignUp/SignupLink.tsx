import { Link } from "react-router-dom";
import "./SignupLink.css";

const SignupLink = ( { title, link }: { title: string, link: string }) => {
    
    return (
        <div className="signup-container">
           <Link className="link-signup" to={link}>{title}</Link>
        </div>
    );
};

export default SignupLink;
