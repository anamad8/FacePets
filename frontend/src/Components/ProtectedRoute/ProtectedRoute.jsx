import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
    let isLogged = localStorage.getItem("user")
    console.log(isLogged)
    if (!isLogged) {
        return <Navigate to='/login'/>
      }
      return(
        <Outlet />
      )
};