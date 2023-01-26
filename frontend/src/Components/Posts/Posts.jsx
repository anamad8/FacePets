import React from 'react'
import Post from '../Post/Post';
import './Posts.css';

function Posts() {

const posts = [
 {
    id:1,
    name: "Benito",
    userId: 1,
    profilePicture: "https://blogdeanimales.com/wp-content/uploads/mch/nuestro-perro-sonrie_1232.jpg",
    img: "https://img.freepik.com/fotos-premium/perro-cachorro-feliz-sonriendo-sobre-fondo-purpura-aislado_77749-593.jpg?w=996",
    desc: "Aca, fotito nueva"
  },
 {
    id:2,
    name: "Samantha",
    userId: 2,
    profilePicture: "https://img.freepik.com/foto-gratis/vista-frontal-concepto-perro-lindo-divertido_23-2148786514.jpg?w=740&t=st=1674593967~exp=1674594567~hmac=59011f0e3a686004d0f06b90f38fd000aa025972a82e63d5bbad41aae04d386d",
    img: "https://thumbs.dreamstime.com/b/cinco-perros-de-diferentes-tama%C3%B1os-diferente-tama%C3%B1o-aislados-sobre-fondo-amarillo-211952005.jpg",
    desc: "lorem Ipsum is Lorem Ipsum but is of unknown purpose and of unknown"
 },
];

  return <div className="posts">
    {posts.map(post => (
        <Post post={post} key={post.id}/>
    ))}
  </div>
}

export default Posts