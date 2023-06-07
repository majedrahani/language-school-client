import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/home/Home";
import SignIn from "../pages/log/SignIn";
import Login from "../pages/log/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/singIn',
                element: <SignIn></SignIn>
            }
        ]
    },
]);

export default router;