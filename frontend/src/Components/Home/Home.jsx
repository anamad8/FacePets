import React from 'react'
import RightBar from '../RightBar/RightBar'
import LeftBar from '../LeftBar/LeftBar'
import Posts from '../Posts/Posts'
function Home() {
  return (
    <div>
        <>
        <div style={{ display: "flex"}}>
        <LeftBar></LeftBar>
        <div style={{flex:6}}>
        <Posts></Posts>
        </div>
        <RightBar></RightBar>
        </div>
        </>
      
    </div>
  )
}

export default Home
