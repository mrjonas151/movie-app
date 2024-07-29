import { useState } from "react";
import Button from "../Button/Button"
import handleSignUp from "../../hooks/handleSignUp";
import "./Form.css"

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
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="name-container">
                    <div className="name-subcontainer">
                        <label htmlFor="first-name">First Name</label>
                        <input 
                            type="text" 
                            value={firstName}
                            placeholder="First Name"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="name-subcontainer">
                    <label htmlFor="last-name">Last Name</label>
                    <input 
                        type="text" 
                        value={lastName}
                        placeholder="Last Name"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    </div>
                    
                </div>

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
                    title="SIGN UP"
                    onClick={handleSubmit}
                    className="signin-button"
                />
            </form>
        </div>
    );
};

export default LoginForm;
