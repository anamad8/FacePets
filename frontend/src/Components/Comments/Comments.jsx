import React from 'react'
import { Link } from 'react-router-dom';
import './Comments.css';

const  Comments = (props) => {
    
    //Comentarios temporales, armado de front para luego conexion con el back

  return (
    <div className="comments" key={props.index}>


        {props.element.comment.map((e, key) =>{
        return( 
            <div className="comment">
                <Link to={`/profile/${e.user.id}`}><img src={e.user.image} alt="" /></Link>
            <div className="info"> 
                <Link to={`/profile/${e.user.id}`} style={{textDecoration:"none", color: "inherit"}}><span>{e.user.petName}</span></Link>
            <p>{e.description}</p>
                    
            </div>
                <span className="date">{e.createdAt}</span>
            </div>
            )
        })}
    </div>
  );
};

export default Comments