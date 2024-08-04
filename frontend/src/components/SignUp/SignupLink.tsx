// src/components/SignUp/SignupLink.tsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./SignupLink.module.css";

interface SignupLinkProps {
    link: string;
    title: string;
    isRed: boolean;
}

const SignupLink: React.FC<SignupLinkProps> = ({ link, title, isRed }) => {
    return (
        <Link
            to={link}
            className={`${styles.linkContainer} ${isRed ? styles.red : styles.blue}`}
        >
            {title}
        </Link>
    );
};

export default SignupLink;
