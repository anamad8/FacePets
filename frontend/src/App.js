import React, {useContext, useEffect} from "react";
import { Routes, Route, Link} from "react-router-dom";
import { DataContext } from "./Context/DataContext";
import { ProtectedRoute }from "./Components/ProtectedRoute/ProtectedRoute";
import Header from "./Components/Header/Header";
import HeaderLogin from "./Components/Header/HeaderLogin";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register";
import './CSS/style.css';

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

  // useEffect(() => {
  //   let body = document.body;
  //   let val=body.classList.toggle("active")
  //   localStorage.setItem("modo",val)
  //   let valor=localStorage.getItem("modo")
  //   let btn = document.querySelector("#btn-darkMode")
  //   const darkModeOn = JSON.parse(localStorage.getItem('mode'));
  //   if (!darkModeOn){
  //     setDarkMode(darkMode);
  //     body.classList.remove("active")
  //     btn.classList.remove("claro")
  //     btn.classList.add("oscuro")
  //   } else{
  //     setDarkMode(!darkMode);
  //     body.classList.add("active")
  //     btn.classList.add("claro")
  //     btn.classList.remove("oscuro")
  //   }
  // }, [])

  console.log(user)
  return (
    <>
      <header>
        <HeaderLogin />
      </header>
      <Routes>
        <Route element={<ProtectedRoute user={user}/>}>
          <Route path="/home" element={<Home/>}/>
        </Route>
        <Route exact path="/login"  element={<Login/>}/>
        <Route exact path="/register" element={<Register/>} />
      </Routes>
    </>
  );
}

// function Navigation() {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/home">Home</Link>
//         </li>
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//         <li>
//           <Link to="/register">Register</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

export default App;
