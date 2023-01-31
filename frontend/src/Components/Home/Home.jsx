import React from 'react'
import './Home.css'
import MakeAPost from '../MakeAPost/MakeAPost';
import Posts from '../Posts/Posts'

const Home = (props) => {



  return (
    <div>
        
      <div style={{ display: "flex"}}>
        <div style={{flex: 6 }}>
          <MakeAPost />
          <Posts />
        </div>
      </div>
        
    </div>
  )
}

export default Home
