import React from 'react';
import '../LoginPage.css'; 

const Register = () => {
    return (
        <div className="register-container">
            <h1 className="register-title">Create an Account</h1>

            <form className="register-form">
                {/* Registration form fields */}
                <input type="text" placeholder="Username" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <input type="password" placeholder="Confirm Password" required />

                <button type="submit">Register</button>
            </form>

            <p className="account-link">
                Already have an account? <a href="/login">Login</a>
            </p>
        </div>
    );
};

export default Register;

