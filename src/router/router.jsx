import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/home/Home";
import SignIn from "../pages/log/SignIn";
import Login from "../pages/log/Login";
import Error from "../pages/Error/error";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard/Dashboard";
import MySClasses from "../pages/Dashbord/MySClasses";
import AllStudents from "../pages/Dashbord/AllStudents";
import AddClasses from "../pages/Dashbord/AddClasses";
import Payment from "../pages/Dashbord/payment/Payment";
import PaymentAll from "../pages/Dashbord/payment/PaymentAll";

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
                element: <PrivateRoute><Instructors></Instructors></PrivateRoute>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
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
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard/mySClasses',
                element: <MySClasses></MySClasses>
            },{
                path: '/dashboard/allStudents',
                element: <AllStudents></AllStudents>
            },
            {
                path: '/dashboard/addClasses',
                element: <AddClasses></AddClasses>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>
            },{
                path: '/dashboard/paymentHistory',
                element: <PaymentAll></PaymentAll>
            }
        ]
    }
]);

export default router;