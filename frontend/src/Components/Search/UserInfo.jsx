import React, { useEffect, useState } from "react";
import UserFormatter from "./UserFormatter";
import './Search.css';

function UserShowcase() {
  const [arrayUsers, setarrayUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/user")
      .then((res) => res.json())
      .then((data) => data.data)
      .then((resp) => {
        setarrayUsers(resp);
      });
  }, []);

  return (
    <>
      <div className="caja">
        <div className="cards"> 
          {arrayUsers.map((e, key) => {
            return (
              <UserFormatter element={e} key={key} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default UserShowcase;
