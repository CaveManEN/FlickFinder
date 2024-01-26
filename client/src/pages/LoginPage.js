import React, { useState } from 'react';
import '../LoginPage.css';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';

function LoginPage() {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
    const [login, { error }] = useMutation(LOGIN);


    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log(email, password); // For demonstration purposes
        try {
            const mutationResponse = await login({
              variables: { email: email, password: password },
            });
            const token = mutationResponse.data.login.token;
            // Auth.login(token);
          } catch (e) {
            console.log(e);
           }
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Email:</label>
                    <input
                        id="email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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

