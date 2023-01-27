import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute }from "./Components/ProtectedRoute/ProtectedRoute";
import SideBar from "./Components/sideBar/sidebar";
import HeaderLogin from "./Components/Header/HeaderLogin";
import Search from "./Components/Search/Search";
import ProfileSpecific from "./Components/Profile/profileSpecific";
import Profile from "./Components/Profile/profile";
import EditProfile from "./Components/Profile/editProfile";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register";
import AboutUs from "./Components/AboutUs/AboutUs";
import './CSS/style.css';
import NewPassword from "./Components/NewPassword/ForgetPassword";
import ResetPassword from "./Components/NewPassword/ResetPassword";



function App() {


  return (
    <>
      <header>
        <HeaderLogin />
      </header>
      <SideBar />
      <Routes>
        <Route element={<ProtectedRoute/>}>

          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/editprofile" element={<EditProfile/>} /> 
          <Route path="/Search/:filter" element={<Search />} />
          <Route path="/profile/:id" element={<ProfileSpecific/>} />
        </Route>
        <Route path="/newPassword/:email" element={<ResetPassword/>} />
        <Route  exact path="/newPassword" element={<NewPassword/>} />
          <Route exact path="/login"  element={<Login/>}/>
          <Route exact path="/register" element={<Register/>} />

      </Routes>
    </>
  );
}

export default App;
