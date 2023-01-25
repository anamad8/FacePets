import React, { useEffect } from 'react'
import ProfileFormatterEach from './profileFormatterEach';
import { useState } from 'react';
import { useParams } from 'react-router-dom';



function ProfileSpecific()  {

    let {id} = useParams();
    const [user, setUser] = useState([])


    useEffect(() => {
        fetch("http://localhost:3030/user/" + id)
          .then((res) => res.json())
          .then((data) => data.data)
          .then((resp) => {
            setUser(resp);
          });
      }, []);

  return (
    <>
          {user.map((e, key) => {
            return (
              <ProfileFormatterEach element={e} key={key} />
            );
          })}
    </>
  )
}

export default ProfileSpecific