import React from "react";
import './LoginPage.css'
import { Link } from "react-router-dom";
const LoginPage = () => {
    return ( 
        <div className="container">
            <h2>Login</h2>
            <form>
                <input type="email" name="email" placeholder="Email" required  className="input-form"/>
                <input type="password" name="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
            <div className="switch">
                <span>No account? <Link to="/register">Register</Link></span>
            </div>
        </div>
     );
}

export default LoginPage;