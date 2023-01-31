import React, { useEffect, useState }  from 'react'
import Post from '../Post/Post';
import './Posts.css';

function Posts() {

const [arrayPosts, setarrayPosts] = useState([]);

useEffect(() => {

  fetch(`http://localhost:3030/post`)
        .then(res => res.json())
        .then(data => {
          setarrayPosts(data)
          console.log(data)
        })

}, [])

return (
  <div className="posts">
     {arrayPosts.map((e, key) => {
      console.log(e)
      return (
        <Post element={e} key={key} user={e.user} comment={e.comment} description={e.description} image={e.image}/>
      )
    })}
  </div>
  )
}

export default Posts