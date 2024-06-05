
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Header from "../components/Home/Header";
import App from "../App";
import MainPage from "../pages/MainPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/travelers",
        element: <div>hduhdjdh</div>,
    },
]);
