import React, { useState } from 'react'
import './Post.css'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from 'react-router-dom';
import Comments from '../Comments/Comments';

function Post({post}) {

      const [commentOpen, setCommentOpen] = useState(false)


//Funcion temporal para hacer la conexion al back

  const liked = false;


  
  return (
    <div className='post'>
      <div className="container">  
      <div className="user">
        <div className="userInfo">
        <img src={post.profilePicture} alt="" />
        <div className="details">
        <Link to={`/profile${post.userId}`} style={{textDecoration:"none", color: "inherit"}}>
            <span className="name">{post.name}</span>
        </Link>
        <span className="date">Hace un momento</span>
        </div>
        </div>
    <MoreHorizIcon/>
      </div>
      <div className="content">
        <p>{post.desc}</p>
        <img className='postImg' src={post.img} alt= "" />
      </div>
      <div className="info">
        <div className="item">
        {liked ? <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon />}
        6 likes 
        </div>
        <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
        <TextsmsOutlinedIcon/>
        2 comentarios
        </div>
        <div className="item">
        <ShareOutlinedIcon/>
         Compartidos
        </div>
      </div>
      {commentOpen && <Comments/>}
    </div>
    </div>
  )
}

export default Post
