import React from 'react'
import { Link } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useDataContext } from '../../Context/DataContext';
import './Comments.css';

const  Comments = (props) => {

    const {datas} = useDataContext();

    const likeComment = () => {
        fetch(`http://localhost:3030/comment/${datas.id}/${props.element.id}`,{
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
                <FavoriteBorderOutlinedIcon onClick={likeComment}/>
                {/* {props.element.likescomments.length} */}
                <span className="date">{e.createdAt}</span>
            </div>
            )
        })}
    </div>
  );
};

export default Comments