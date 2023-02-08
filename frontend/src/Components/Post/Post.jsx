import React, { useState } from 'react'
import './Post.css'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from 'react-router-dom';
import Comments from '../Comments/Comments';
import { useDataContext } from '../../Context/DataContext';
import { AiOutlineCloseCircle } from "react-icons/ai";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';


const Post = (props) => {

  const [commentOpen, setCommentOpen] = useState(false)

  const {datas} = useDataContext();

const [data, setData] = useState({
  description:'',
  image:''
})
 
const handleChange = (e) => {

  if(e.target.name === 'image'){
    setData({
      ...data,
      [e.target.name]: e.target.files,
    })

  }else{
      setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

}

const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData();

  formData.append("description", data.description);
  formData.append("image", data.image[0]);

  fetch(`http://localhost:3030/comment/${datas.id}/${props.element.id}`,{
    method:'POST',
    body: formData,
  }).then((res) => {
    res.json()
    window.location.reload(false);
    }
  ).then(data => console.log(data))
  .catch((err) => console.log(err))
  
}

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
const eliminarPost=()=>{
  fetch(`http://localhost:3030/post/${props.element.id}`,{
  method:'DELETE'
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

  const liked = false;
  
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
   {props.user.id === datas.id ?<AiOutlineCloseCircle onClick={eliminarPost} id="icon" />:<></>} 
      </div>
      <div className="content">
        <p>{props.description}</p>
        {props.image != null ?  <img className='postImg' src={props.image} alt= "" /> : <></>}
       
      </div>
      <div className="info">
        <div className="item">
        {liked ? <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon onClick={likePost}/>}
        {props.element.likesPost.length}
        </div>
        <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
        <TextsmsOutlinedIcon/>
        {props.element.comment.length}

        </div>
        
        <div className="write" >
          <form onSubmit={handleSubmit}>
        
            <input type="text" name="description" onChange={handleChange} placeholder="Escribe un comentario"/>
            <button type="submit">Enviar</button>

          </form>
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