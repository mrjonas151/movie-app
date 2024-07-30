import { Link } from "react-router-dom";
import styles from "./SignupLink.module.css";

const SignupLink = ( { title, link }: { title: string, link: string }) => {
    
    return (
        <div className={styles.signupContainer}>
           <Link className={styles.linkSignup} to={link}>{title}</Link>
        </div>
    );
};

export default SignupLink;
