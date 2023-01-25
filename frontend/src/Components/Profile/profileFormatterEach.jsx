import React from "react"
import { BsGenderFemale, BsGenderMale } from "react-icons/bs"
import './profile.css'


const ProfileFormatterEach = (props) =>{


let styles={
    backgroundImage: "url(" + props.element.imageBanner + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

return(
    <>
    <div className="flexContainer"  key={props.index}>
    <div className="containerProfile">
        <div className="profileImg" style={styles}>
            <img src={props.element.image} alt='perfilImg' />
        </div>
        <div className="profileData">
        <h1 style={{
            display:'inline'
        }}>{props.element.petName}</h1>{props.element.gender == 1 ? <span> <BsGenderFemale/> </span>:<span> <BsGenderMale/></span>}
        <span className="profileAge"> Edad: {props.element.petAge}</span>
        <h1>{props.element.breed}</h1>
        </div>
        <div className="profileDesc">
            <p>{props.element.description}</p>
        </div>
    </div>
    </div>
    </>
)
}

export default ProfileFormatterEach