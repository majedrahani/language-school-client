import { Navigate, useLocation } from "react-router";


import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAdmin from "../Hooks/useAdmin";


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className=" w-full py-60 flex justify-center">
            <span className="loading loading-bars text-[#01A2A6] loading-lg"></span>
        </div>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;