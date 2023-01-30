import React, { useEffect } from 'react'
import ProfileFormatterEach from './profileFormatterEach';
import { useState } from 'react';
import { useParams } from 'react-router-dom';



function ProfileSpecific()  {

    let {id} = useParams();
    const [user, setUser] = useState(null)


    useEffect(() => {
        fetch("http://localhost:3030/user/userPost/" + id)
          .then((res) => res.json())
          .then((data) => setUser(data));
      }, []);

  return (
    <>
      {user ? 
      <ProfileFormatterEach element={user} /> : <></>
    }
                    
    </>
  )
}

export default ProfileSpecific