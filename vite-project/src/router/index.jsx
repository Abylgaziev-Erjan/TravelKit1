import { useRoutes } from "react-router";
import MainPage from "../MainPage";
import ProfilePage from '../pages/profilePage/ProfilePage'
import RegisterPage from "../pages/profilePage/RegisterPage";
import LoginPage from "../pages/profilePage/LoginPage";

function Routerview() {
    const element = useRoutes([
        {path: "/", element: <MainPage />},
        {path: "/profile", element: <ProfilePage/>},
        {path: "/login", element: <LoginPage/>},
        {path: "/register", element: <RegisterPage/>},
        
    ])
    return element
}

export default Routerview