import { Link } from "react-router-dom";
import styles from "./SignupLink.module.css";

interface SignupLinkProps {
    title: string;
    link: string;
    isRed: boolean;
}

const SignupLink: React.FC<SignupLinkProps> = ({ title, link, isRed }) => {
    return (
        <div className={styles.signupContainer}>
            <Link
                className={`${styles.linkSignup} ${
                    isRed ? styles.redLink : styles.blueLink
                }`}
                to={link}
            >
                {title}
            </Link>
        </div>
    );
};

export default SignupLink;
