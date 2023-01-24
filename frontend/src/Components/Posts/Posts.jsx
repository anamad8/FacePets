import React from 'react'
import Post from '../Post/Post';
import './Posts.css';

function Posts() {

const posts = [
 {
    id:1,
    name: "Benito",
    userId: 1,
    profilePicture: "https://img.freepik.com/foto-gratis/lindo-perrito-haciendose-pasar-persona-negocios_23-2148985938.jpg?w=740&t=st=1674593890~exp=1674594490~hmac=267f504ecb185eb8a1a67c2b8f0b57cc605427d2ecec3cc30262fb60db4f12c9", 
    desc:"lorem ipsorum dolor sit amet, consectetur adipiscing elit",
    img: "https://img.freepik.com/foto-gratis/vista-frontal-concepto-perro-lindo-divertido_23-2148786532.jpg?w=740&t=st=1674594192~exp=1674594792~hmac=bfceb6326fc1e98c175cc4288b668455a49f814d3991559ebe4ae97555e21a95",
 },
 {
    id:2,
    name: "Samantha",
    userId: 2,
    profilePicture: "https://img.freepik.com/foto-gratis/vista-frontal-concepto-perro-lindo-divertido_23-2148786514.jpg?w=740&t=st=1674593967~exp=1674594567~hmac=59011f0e3a686004d0f06b90f38fd000aa025972a82e63d5bbad41aae04d386d",
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