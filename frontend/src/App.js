import React, {useContext} from "react";
import { Routes, Route, Link} from "react-router-dom";
import { DataContext } from "./Context/DataContext";
import { ProtectedRoute }from "./Components/ProtectedRoute/ProtectedRoute";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register";
import './CSS/style.css';

function App() {

  const { user, login, logout } = useContext(DataContext)

  console.log(user)
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute user={user}/>}>
          <Route path="/home" element={<Home/>}/>
        </Route>
        <Route exact path="/login"  element={<Login/>}/>
        <Route exact path="/register" element={<Register/>} />
      </Routes>
      <Navigation/>
    {
      user ? (
        <button onClick={logout}>Logout</button> 
      ) : (
        <button onClick={login}>Login</button> 
      )
    }
    </>
  );
}

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
}

export default App;
