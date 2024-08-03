import { useState } from "react";
import Button from "../Button/Button";
import handleSignIn from "../../hooks/handleSignIn";
import styles from "./Form.module.css";

interface LoginFormProps {
    isRed: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ isRed }) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSignIn({ email, password });
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSubmit(e);
        }
    };

    return (
        <div>
            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <label className={styles.signInLabel} htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    value={email}
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={styles.signInInput}
                />
                <label className={styles.signInLabel} htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    value={password}
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className={styles.signInInput}
                    onKeyDown={handleKeyDown}
                />
                <Button
                    title="SIGN IN"
                    onClick={handleSubmit}
                    className={`${styles.signInButton} ${
                        isRed ? styles.redButton : styles.blueButton
                    }`}
                />
            </form>
        </div>
    );
};

export default LoginForm;
