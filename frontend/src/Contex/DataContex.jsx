/* eslint-disable no-undef */
import React, {createContext, useState, useEffect} from "react";

export const DataContext = createContext({});

export const DataProveder = ({children}) => {

    const [user,setUser] = useState(null)

    const [darkMode, setDarkMode] = useState(false)

    const handlePosition = () => {
        setDarkMode(!darkMode)
        let modo = document.getElementById("active");
        let body = document.body;

        let val=body.classList.toggle("active")
        localStorage.setItem("modo",val)
        

        let valor=localStorage.getItem("modo")
        let btn = document.querySelector("#btn-darkMode")
        console.log(btn)
        if (valor === "true") {
            body.classList.add("active")
            btn.classList.add("claro")
            btn.classList.remove("oscuro")

        } else {
            body.classList.remove("active")
            btn.classList.remove("claro")
            btn.classList.add("oscuro")
        }
    }

    const login = () => {
        setUser({
            id:1,
            name:"ana"
        })
    }

    const logout = () => setUser(null)


    

    return(
        <DataContext.Provider value={{user, login, logout,darkMode, setDarkMode, handlePosition}}>
            {children}
        </DataContext.Provider>
    )
}