/* eslint-disable no-undef */
import React, {createContext, useState, useEffect} from "react";

export const DataContext = createContext({});

export const DataProveder = ({children}) => {

    const [user,setUser] = useState(null)

    const login = () => {
        setUser({
            id:1,
            name:"ana"
        })
    }

    const logout = () => setUser(null)


    

    return(
        <DataContext.Provider value={{user,login,logout}}>
            {children}
        </DataContext.Provider>
    )
}