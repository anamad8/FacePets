import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ user, redirectTo="/login"}) => {
    if (!user) {
        return <Navigate to={redirectTo}/>;
    }

    return <Outlet/>;
};