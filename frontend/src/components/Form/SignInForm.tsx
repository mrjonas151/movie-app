import { useState } from "react";
import Button from "../Button/Button"
import handleSignIn from "../../hooks/handleSignIn";
import styles from "./Form.module.css"

const LoginForm = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSignIn({ email, password });
    }

    return (
        <div>
            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <label className={styles.signInLabel} htmlFor="email">Email</label>
                <input
                    type="email"
                    value={email}
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={styles.signInInput}
                />
                <label className={styles.signInLabel} htmlFor="password">Password</label>
                <input
                    type="password"
                    value={password}
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className={styles.signInInput}
                />
                <Button 
                    title="SIGN IN"
                    onClick={handleSubmit}
                    className={styles.signInButton}
                />
            </form>
        </div>
    );
};

export default LoginForm;
