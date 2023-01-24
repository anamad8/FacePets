import React from 'react'
import './Post.css'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from 'react-router-dom';

function Post({post}) {
  return (
    <div className='post'>
      <div className="container">  
      <div className="user">
        <div className="userInfo">
        <img src={post.img} alt="" />
        <div className="details">
        <Link to={`/profile${post.userId}`} style={{textDecoration:"none", color: "inherit"}}>
            <span className="name">{post.name}</span>
        </Link>
        <span className="date">Hace 1 minuto</span>
        </div>
        </div>
    <MoreHorizIcon/>
      </div>
      <div className="content"></div>
      <div className="info"></div>
    </div>
    </div>
  )
}

export default Post
