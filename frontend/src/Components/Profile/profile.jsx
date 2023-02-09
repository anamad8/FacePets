import React, { useEffect, useState } from "react";
import MakeAPost from "../MakeAPost/MakeAPost";
import { BsPencil, BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDataContext } from "../../Context/DataContext";
import "./profile.css";
import Post from "../Post/Post";
import "../Posts/Posts.css";
const Profile = () => {
  const { datas } = useDataContext();

  let styles = {
    backgroundImage: "url(" + datas.imageBanner + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3030/user/userPost/" + datas.id)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <>
    <div style={{ display: "flex"}}>
        <div style={{flex: 6 }}>
      <div className="flexContainer">
        <div className="containerProfile">
          <div className="profileImg" style={styles}>
            <Link to="/editProfile">
              <BsPencil className="icon" />
            </Link>
            <img src={datas.image} alt="perfilImg" />
          </div>
          <div className="profileData">
            <h1
              style={{
                display: "inline",
              }}
            >
              {datas.petName}
            </h1>
            {datas.gender == 1 ? (
              <span>
                {" "}
                <BsGenderFemale />{" "}
              </span>
            ) : (
              <span>
                {" "}
                <BsGenderMale />
              </span>
            )}
            <span className="profileAge"> Edad: {datas.petAge}</span>
            <h1>{datas.breed}</h1>
          </div>
          <div className="profileDesc">
            <p>{datas.description}</p>
          </div>
        </div>
      </div>
      <MakeAPost />

{user ?
<>

<div className="posts" id="postsProfile" key={datas.id}>
        {user.post.map((e, key) => {
          return (
            <>
              <Post
                element={e}
                key={key}
                user={datas}
                comment={e.comment}
                description={e.description}
                image={e.image}
              />
            </>
          );
        })}
      </div></>: <></>}
      </div></div>  
    </>
  );
};

export default Profile;
