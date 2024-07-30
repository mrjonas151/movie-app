import { useState } from "react";
import Button from "./Button/Button"

import "./LoginForm.css"
import handleSignIn from "../hooks/handleSignIn";

const LoginForm = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSignIn({ email, password });
    }

    return (
        <div>
            <form className="form-container" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    value={email}
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    value={password}
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button 
                    title="SIGN IN"
                    onClick={handleSubmit}
                    className="signin-button"
                />
            </form>
        </div>
    );
};

export default LoginForm;
