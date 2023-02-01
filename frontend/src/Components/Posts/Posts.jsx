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
        })

}, [])

return (
  <div className="posts">
     {arrayPosts.map((e, key) => {
      return (
        <Post element={e} key={key} user={e.user} comment={e.comment} description={e.description} image={e.image}/>
      )
    })}
  </div>
  )
}

export default Posts