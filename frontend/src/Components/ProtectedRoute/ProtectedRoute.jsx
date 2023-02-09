import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  let isLogged = localStorage.getItem("user")
    if (!isLogged) {
        return <Navigate to="/login"/>;
    }

    return <Outlet/>;
};