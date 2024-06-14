import React from "react";
import './RegisterPage.css';
import { Link } from "react-router-dom";


const RegisterPage = () => {
    return ( 
        <div className="container">
            <h2>Регистрация</h2>
            <form>
                <input type="text" name="username" placeholder="User name" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <button type="submit">Register</button>
            </form>
            <div className="switch">
                <span> Already have an account? <Link to="/login">Login</Link></span>
            </div>
        </div>
     );
}

export default RegisterPage;