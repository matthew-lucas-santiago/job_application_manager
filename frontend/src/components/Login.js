import React, { useState } from 'react';
import axios from 'axios';
import "./styles/Login.css";

const Login = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/auth/login', {
                email,
                password
            });
            // Save the JWT token in localStorage or state
            setToken(response.data.access_token);  // Use a state or localStorage to store the token
        } catch (error) {
            alert(error.response.data.message);  // Show error message
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
