import React from 'react'
import './Comments.css';

function Comments() {
    
    //Comentarios temporales, armado de front para luego conexion con el back


    const comments = [
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet, consectet ut labore et justo eu, sed diam nonum",
            name: "Benito",
            userId: 1,
            profilePicture: "https://blogdeanimales.com/wp-content/uploads/mch/nuestro-perro-sonrie_1232.jpg",
        },
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet, consectet ut labore et justo eu, sed diam nonum",
            name: "Samantha",
            userId: 2,
            profilePicture: "https://img.freepik.com/foto-gratis/vista-frontal-concepto-perro-lindo-divertido_23-2148786514.jpg?w=740&t=st=1674593967~exp=1674594567~hmac=59011f0e3a686004d0f06b90f38fd000aa025972a82e63d5bbad41aae04d386d",
        },
    ];

  return (
    <div className="comments">
        <div className="write">
        
        
        <input type="text" placeholder="Escribe un comentario" />
        <button>Enviar</button>
        
        </div>
        {comments.map (comment => (
            <div className="comment">
                <img src={comment.profilePicture} alt="" />
            <div className="info"> 
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
            </div>
            <span className="date">Hace un momento</span>
            </div>
        ))}
    </div>
  );
};

export default Comments