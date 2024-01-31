import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import React from 'react';
import '../LoginPage.css'; 
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations.js';



const Register = () => {
    const [formState, setFormState] = useState({ email: '', password: '', username: '' });
    const [addUser] = useMutation(ADD_USER);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      const mutationResponse = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
          username: formState.username,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };

    return (
        <div className="register-container">
            <h1 className="register-title">Create an Account</h1>

            <form onSubmit={handleFormSubmit} className="register-form">
                {/* Registration form fields */}
                <input onChange={handleChange} name="username" type="text" placeholder="Username" required />
                <input onChange={handleChange} name="email" type="email" placeholder="Email" required />
                <input onChange={handleChange} name="password" type="password" placeholder="Password" required />
                <input onChange={handleChange} name="password" type="password" placeholder="Confirm Password" required />

                <button type="submit">Register</button>
            </form>

            <p className="account-link">
                Already have an account? <a href="/login">Login</a>
            </p>
        </div>
    );
};

export default Register;

