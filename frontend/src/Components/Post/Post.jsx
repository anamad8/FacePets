import React, { useState } from 'react'
import './Post.css'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from 'react-router-dom';
import Comments from '../Comments/Comments';

const Post = (props) => {

  const [commentOpen, setCommentOpen] = useState(false)

  

//Funcion temporal para hacer la conexion al back

  const liked = false;
  
  return (
    <div className='post' key={props.index}>
      <div className="container">  
      <div className="user">
        <div className="userInfo">
        <Link to={`/profile/${props.element.user.id}`}><img src={props.element.user.image} alt="" /></Link>
        <div className="details">
        <Link to={`/profile/${props.element.user.id}`} style={{textDecoration:"none", color: "inherit"}}>
            <span className="name">{props.element.user.petName}</span>
        </Link>
        </div>
        </div>
    <MoreHorizIcon/>
      </div>
      <div className="content">
        <p>{props.element.description}</p>
        <img className='postImg' src={props.element.image} alt= "" />
      </div>
      <div className="info">
        <div className="item">
        {liked ? <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon />}
        6 likes 
        </div>
        <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
        <TextsmsOutlinedIcon/>
        </div>
        
        <div className="write">
        
        <input type="text" placeholder="Escribe un comentario" />
        <button>Enviar</button>
        
        </div>

      </div>
      {props.element.comment.length > 0 ? 
        commentOpen && <Comments element={props.element} key={props.index}/>
        : <></>
      }
      
    </div>
    </div>
  )
}

export default Post
