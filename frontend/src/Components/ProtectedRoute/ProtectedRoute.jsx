import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ user, resirectTo="/login"}) => {
    if (!user) {
        return <Navigate to={resirectTo}/>;
    }

    return <Outlet/>;
};