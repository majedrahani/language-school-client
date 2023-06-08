import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/home/Home";
import SignIn from "../pages/log/SignIn";
import Login from "../pages/log/Login";
import Error from "../pages/Error/error";
import Instructors from "../pages/Instructors/Instructors";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
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