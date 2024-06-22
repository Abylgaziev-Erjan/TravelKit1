import { useRoutes } from "react-router";
import MainPage from "../MainPage";
import ProfilePage from '../pages/profilePage/ProfilePage'
import RegisterPage from "../pages/profilePage/RegisterPage";
import LoginPage from "../pages/profilePage/LoginPage";
import PricePage from "../pages/pricePage/pricePage";
import TourCard from "../pages/pricePage/TourCardPage";
import IkPage from "../pages/pricePage/IkPage";
import Grove from "../pages/pricePage/Grove";
import OrdoPage from "../pages/pricePage/OrdoPage"
import Karakol from "../pages/pricePage/Karakol"
import Suusamyr from "../pages/pricePage/Suusamyr"



function Routerview() {
    const element = useRoutes([
        {path: "/", element: <MainPage />},
        {path: "/profile", element: <ProfilePage/>},
        {path: "/login", element: <LoginPage/>},
        {path: "/register", element: <RegisterPage/>},
        {path: "/travelers", element: <PricePage/>} ,
        {path: "/info", element: <TourCard/>},
        {path: "/infomanas", element: <OrdoPage/>},
        {path: "/infogrove", element: <Grove/>},
        {path: "/infosuu", element: <Suusamyr/> },
        {path: "/infokara", element: <Karakol/>},
        {path: "/infoik", element: <IkPage/>}
    
        
     
    ])
    return element
}

export default Routerview