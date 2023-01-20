
import React, {useContext} from "react";
import './CSS/style.css'
import { Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register";
import { DataContext } from "./Contex/DataContex";
import { ProtectedRoute }from "./Components/ProtectedRoute/ProtectedRoute"


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
          {/* <Link to="/register">Register</Link> */}
        </li>
      </ul>
    </nav>

  );
}

export default App;
