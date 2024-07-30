import { useState } from "react";
import Button from "../Button/Button"
import handleSignUp from "../../hooks/handleSignUp";
import styles from "./Form.module.css"

const LoginForm = () => {

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSignUp({ firstName, lastName, email, password });
    }

    return (
        <div>
            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <div className={styles.nameContainer}>
                    <div className={styles.nameSubcontainer}>
                        <label 
                            className={styles.signInLabel}
                             htmlFor="first-name">
                            First Name
                        </label>
                        <input 
                            type="text" 
                            value={firstName}
                            placeholder="First Name"
                            onChange={(e) => setFirstName(e.target.value)}
                            className={styles.signInInput}
                        />
                    </div>
                    <div className={styles.nameSubcontainer}>
                        <label 
                            className={styles.signInLabel}
                            htmlFor="last-name">
                            Last Name
                        </label>
                        <input 
                            type="text" 
                            value={lastName}
                            placeholder="Last Name"
                            onChange={(e) => setLastName(e.target.value)}
                            className={styles.signInInput}
                        />
                    </div>
                    
                </div>

                <label
                    className={styles.signInLabel} 
                    htmlFor="email">Email</label>
                <input
                    type="email"
                    value={email}
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.signInInput}
                />
                <label 
                    className={styles.signInLabel}
                    htmlFor="password">Password</label>
                <input
                    type="password"
                    value={password}
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.signInInput}
                />
                <Button 
                    title="SIGN UP"
                    onClick={handleSubmit}
                    className={styles.signInButton}
                />
            </form>
        </div>
    );
};

export default LoginForm;
