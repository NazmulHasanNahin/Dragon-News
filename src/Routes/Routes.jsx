import {
    createBrowserRouter,
    
} from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import News from "../Pages/News";
import PrivateRoutes from "./PrivateRoutes";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element:<Home></Home>,
                loader:() => fetch("/news.json"),
                
            },
            {
                path: "/news/:id",
                element:<PrivateRoutes><News></News></PrivateRoutes>,
            },
            {
                path: "/login",
                element:<Login></Login>,
            },
            {
                path: "/register",
                element:<Register></Register>,
            },

        ]
    },
]);

export default routes;