import React from 'react'
import { Link } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDataContext } from '../../Context/DataContext';
import './Comments.css';

const  Comments = (props) => {

    const {datas} = useDataContext();

    const likeComment = (idComment) => {
        console.log(idComment)
        fetch(`http://localhost:3030/like/comment/${datas.id}/${idComment}`,{
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

    const eliminarComment=(idComment)=>{
        fetch(`http://localhost:3030/comment/${idComment}`,{
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
    <div className="comments" key={props.key}>
        {props.comment.map((e, key) =>{
        return( 
            <div className="comment">
                <Link to={`/profile/${e.user.id}`}><img src={e.user.image} alt="" /></Link>
            <div className="info"> 
                <Link to={`/profile/${e.user.id}`} style={{textDecoration:"none", color: "inherit"}}><span>{e.user.petName}</span></Link>
                    
            <p>{e.description}</p>
                    
            </div>
                <div className="item">
                {liked ? <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon onClick={() => {likeComment(e.id)}}/>}
                {e.likesComment.length} 
                </div>
                <span className="date">{e.createdAt}</span>
                {e.user.id === datas.id ?<AiOutlineCloseCircle onClick={() => {eliminarComment(e.id)}} id="icon" />:<></>} 
            </div>
            )
        })}
    </div>
  );
};

export default Comments