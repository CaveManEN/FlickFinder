import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import '../LoginPage.css';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';


function LoginPage() {
    const [formState, setFormState] = useState({ username: '', password: '' });

    const [login, { error }] = useMutation(LOGIN);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle login logic here
        // console.log(username, password); // For demonstration purposes
        try {
            const mutationResponse = await login({
              variables: { username: formState.username, password: formState.password },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
          } catch (e) {
            console.log(e);
          }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
          ...formState,
          [name]: value,
        });
      };

    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        // value={username}
                        // onChange={(e) => setUsername(e.target.value)}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
            <p className="create-account-link">
                Don’t have an account? <a href="/register">Create one here</a>
                
            </p>
        </div>
    );
}

export default LoginPage;

