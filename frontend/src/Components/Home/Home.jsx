import React from 'react'
import Posts from '../Posts/Posts'
function Home() {
  return (
    <div>
        <>
        <div style={{ display: "flex"}}>
        <div style={{flex: 6 }}>
        <Posts />
        </div>
        </div>
        </>
      
    </div>
  )
}

export default Home
