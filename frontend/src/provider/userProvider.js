import React, { useState, useContext, useEffect } from "react";

const userContext = React.createContext();
const userToggleContext = React.createContext();

export function useUserContext() {
  return useContext(userContext);
}
export function useUserToggleContext() {
  return useContext(userToggleContext);
}

export function UserProvider(props) {
  const [user, setUser] = useState({id:1});
  const [datas, setData] = useState({});
  useEffect(() => {
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
      .catch((err) => console.log(err));
  }, [user]);
  const login = (id) => {
    setUser(id);
  };
  const salirLogin = () => {
    setUser(null);
  };

  return (
    <userContext.Provider value={{datas}}>
      <userToggleContext.Provider
        value={{
          login,
          salirLogin,
        }}
      >
        {props.children}
      </userToggleContext.Provider>
    </userContext.Provider>
  );
}
