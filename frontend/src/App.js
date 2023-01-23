import React, {useContext, useEffect} from "react";
import { Routes, Route, Link} from "react-router-dom";
import { DataContext } from "./Context/DataContext";
import { ProtectedRoute }from "./Components/ProtectedRoute/ProtectedRoute";
import SideBar from "./Components/sideBar/sidebar";
import HeaderLogin from "./Components/Header/HeaderLogin";
import Profile from "./Components/Profile/profile";
import EditProfile from "./Components/Profile/editProfile";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register";
import './CSS/style.css';
import AboutUs from "./Components/AboutUs/AboutUs";


function App() {

  const { user, login, logout, setUser, setDarkMode, darkMode } = useContext(DataContext)

  useEffect(() => {
    const userLogged = JSON.parse(localStorage.getItem('user'));
    if(!userLogged){
      setUser(null);
    } else{
      setUser(userLogged);
    }
  }, [])

  console.log(user)
  return (
    <>
      <header>
        <HeaderLogin />
      </header>
      <SideBar />
      <Routes>
        <Route element={<ProtectedRoute user={user}/>}>

          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/editprofile" element={<EditProfile/>} /> 
          
        </Route>

        <Route exact path="/login"  element={<Login/>}/>
        <Route exact path="/register" element={<Register/>} />

      </Routes>
      
    </>
  );
}

export default App;

// comentario de prueba