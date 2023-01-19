/* eslint-disable no-undef */
import React, {createContext, useState, useEffect, useContext} from "react";

export const DataContext = createContext({});
export function useDataContext() {
    return useContext(DataContext);
  }

export const DataProveder = ({children}) => {

    const [user,setUser] = useState({
        id:3
    })
    const [darkMode, setDarkMode] = useState(false)
    const [datas, setData] = useState({});

    useEffect(() => {
        if(user){
        fetch("http://localhost:3030/user/" + user.id)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            console.log(data.data[0].name);
            setData({
              id: data.data[0].id,
              name: data.data[0].name,
              petName: data.data[0].petName,
              email: data.data[0].email,
              breed: data.data[0].breed,
              description: data.data[0].description,
              image: data.data[0].image,
              gender:data.data[0].gender,
              petAge: data.data[0].petAge,
              imageBanner: data.data[0].imageBanner
            });
          })
          .catch((err) => console.log(err));}
      }, [user]);

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

    const login = (id) => {
        setUser({
            id:id
        })
    }

    const logout = () => setUser(null)


    

    return(
        <DataContext.Provider value={{user, datas,login, logout,darkMode, setDarkMode, handlePosition}}>
            {children}
        </DataContext.Provider>
    )
}