import React,{useContext, useState} from 'react';
import './HeaderLogin.css';
import { DataContext } from '../../Contex/DataContex';
import DarkMode from '../DarkMode/DarkMode';
import { BiUserCircle } from "react-icons/bi";
import { CiBellOn, CiLogin } from "react-icons/ci";
import { FaEnvelope } from "react-icons/fa";
import img from '../../Img/image 3.png'
import BtnBuguer from '../BtnBurguer/BtnBuguer';
import { AiOutlineSearch } from "react-icons/ai";


function HeaderLogin() {

    const { user } = useContext(DataContext);

    const [btnMenu, setBtnMenu] = useState(false);

    const handleClick = () =>{
        setBtnMenu(!btnMenu)
    }

    return (
        <>
            {
                user ? (

                <div className='headerLogin'>
                    <div className='img-logo'></div>
                    <div className={`input ${btnMenu ? 'activar' : '' } `}>
                        <AiOutlineSearch className='search'/>
                        <input type="text" />
                        
                    </div>
                    <div  className={`links ${btnMenu ? 'activar' : '' } `}>
                        <div className='darMode'>
                            <DarkMode/>
                        </div>
                        <div className='icon'>
                            
                            <BiUserCircle />
                            <FaEnvelope />
                            <CiBellOn />
                        </div>
                        <div className='headerUser'>
                            <img src={img} alt="" />
                            <p>Nombre</p>
                        </div>
                        <CiLogin className='CiLogin'/>
                        
                    </div> 
                    <div className='btnBurguer'>
                            <BtnBuguer btnMenu={btnMenu} handleClick={handleClick}/>
                    </div>                 
                </div>

                ) : (
                <p>no ahi usuario</p> 
                )
            }
        </>
    )
}

export default HeaderLogin
