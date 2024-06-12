import React from "react";
import './RegisterPage.css';
import { Link } from "react-router-dom";


const RegisterPage = () => {
    return ( 
        <div className="container">
            <h2>Регистрация</h2>
            <form>
                <input type="text" name="username" placeholder="Имя пользователя" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Пароль" required />
                <button type="submit">Регистрация</button>
            </form>
            <div className="switch">
                <span>Уже есть аккаунт? <Link to="/login">Войти</Link></span>
            </div>
        </div>
     );
}

export default RegisterPage;