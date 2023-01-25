import React,{useContext, useState} from 'react';
import './HeaderLogin.css';
import Header from './Header';
import { DataContext} from '../../Context/DataContext';
import { Link } from "react-router-dom"
import DarkMode from '../DarkMode/DarkMode';
import { BiUserCircle } from "react-icons/bi";
import { CiBellOn, CiLogin } from "react-icons/ci";
import { FaEnvelope } from "react-icons/fa";
import imgLogo from '../Img/Pet-logo-Transparent.png'
import BtnBurguer from '../BtnBurguer/BtnBurguer';
import { AiOutlineSearch } from "react-icons/ai";
import {useNavigate} from "react-router-dom";



function HeaderLogin() {

    const { user, setUser,datas } = useContext(DataContext)

    console.log(user)

    const [btnMenu, setBtnMenu] = useState(false);

    const history = useNavigate()

    const handleClick = () =>{
        setBtnMenu(!btnMenu)
    }

    function logOutRedirect() {
        setUser(null)
        localStorage.clear();
        history("/login");
    }

    
    return (
        <>
            {
                localStorage.getItem("user") ? (

                <div className='headerLogin'>
                    <div className='img-logo'>
                    <Link to="/home"><img src={imgLogo} alt="" className='img-logo' /></Link>
                    </div>
                    <div className={`input ${btnMenu ? 'activar' : '' } `}>
                        <AiOutlineSearch className='search'/>
                        <input type="text" />
                        
                    </div>
                    <div  className={`links ${btnMenu ? 'activar' : '' } `}>
                        <div className='darMode'>
                            <DarkMode/>
                        </div>
                        <div className='icon' >            
                            <Link to="/profile"><BiUserCircle/></Link>
                            <FaEnvelope />
                            <CiBellOn />
                        </div>
                        <div className='headerUser'>
                            <img src={datas.image} />
                            <p>{datas.petName} </p>
                        </div>
                        <CiLogin className='CiLogin' onClick={logOutRedirect}/>
                        
                    </div> 
                    <div className='btnBurguer'>
                            <BtnBurguer btnMenu={btnMenu} handleClick={handleClick}/>
                    </div>                 
                </div>

                ) : (
                    <Header />
                )
            }
        </>
    )
}

export default HeaderLogin