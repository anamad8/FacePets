import React, { useState } from 'react'
import './Post.css'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from 'react-router-dom';
import Comments from '../Comments/Comments';
import { useDataContext } from '../../Context/DataContext';

const Post = (props) => {

  const [commentOpen, setCommentOpen] = useState(false)
const {datas} = useDataContext();
  const liked = false;
const likePost =() =>{
fetch(`http://localhost:3030/like/post/${datas.id}/${props.element.id}`,{
  method:'POST'
}).then((res) => {
  res.json()          
  .then(data => {
    console.log(data)
    window.location.reload(false);
    
  })
  })
.catch((err) => {
  console.log(err)
})      
}

//Funcion temporal para hacer la conexion al back

  
  return (
    <div className='post' key={props.key}>
      <div className="container">  
      <div className="user">
        <div className="userInfo">
        <Link to={`/profile/${props.user.id}`}><img src={props.user.image} alt="" /></Link>
        <div className="details">
        <Link to={`/profile/${props.user.id}`} style={{textDecoration:"none", color: "inherit"}}>
            <span className="name">{props.user.petName}</span>
        </Link>
        </div>
        </div>
    <MoreHorizIcon/>
      </div>
      <div className="content">
        <p>{props.description}</p>
        <img className='postImg' src={props.image} alt= "" />
      </div>
      <div className="info">
        <div className="item">
        {liked ? <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon onClick={likePost}/>}
        {props.element.likesPost.length}
        </div>
        <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
        <TextsmsOutlinedIcon/>
        </div>
        
        <div className="write">
        
        <input type="text" placeholder="Escribe un comentario" />
        <button>Enviar</button>
        
        </div>

      </div>
      {props.comment.length > 0 ? 
        commentOpen && <Comments comment={props.element.comment} key={props.key}/>
        : <></>
      }
      
    </div>
    </div>
  )
}

export default Post
