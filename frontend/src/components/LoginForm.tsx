import { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <div>
            <form className="form-container">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    value={email}
                    placeholder="Enter your email"
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    value={password}
                    placeholder="Enter your password"
                />
                <button>SIGN IN</button>
            </form>
        </div>
    );
};

export default LoginForm;
