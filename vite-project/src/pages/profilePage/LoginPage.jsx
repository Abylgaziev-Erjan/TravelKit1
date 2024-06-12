import React from "react";
import './LoginPage.css'
import { Link } from "react-router-dom";
const LoginPage = () => {
    return ( 
        <div className="container">
            <h2>Логин</h2>
            <form>
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Пароль" required />
                <button type="submit">Войти</button>
            </form>
            <div className="switch">
                <span>Нет аккаунта? <Link to="/register">Регистрация</Link></span>
            </div>
        </div>
     );
}

export default LoginPage;