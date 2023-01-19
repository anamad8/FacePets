import React from 'react';
import Header from '../../Components/Header/Header';
import Comments from '../Comments/Comments';
import RightBar from '../RightBar/RightBar';

function Home() {
    return (
        <>
            <Header/>
            <Comments></Comments>
            <RightBar></RightBar>
            
        </>
    )
}

export default Home
