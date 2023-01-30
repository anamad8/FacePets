import React,{useContext, useState} from 'react';
import './HeaderLogin.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Header from './Header';
import { DataContext, useDataContext } from '../../Context/DataContext';
import { Link } from "react-router-dom"
import DarkMode from '../DarkMode/DarkMode';
import { BiUserCircle } from "react-icons/bi";
import { CiBellOn, CiLogin } from "react-icons/ci";
import { FaEnvelope } from "react-icons/fa";
import imgLogo from '../Img/Pet-logo-Transparent.png'
import BtnBurguer from '../BtnBurguer/BtnBurguer';
import { AiOutlineSearch } from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import { BsSearch } from "react-icons/bs";


function HeaderLogin() {

    const { user, setUser } = useContext(DataContext);

    const { datas } = useDataContext();
    
    const [filter, setFilter] = useState("")

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
                user ? (

                <div className='headerLogin'>
                    <div className='img-logo'>
                    <Link to="/"><img src={imgLogo} alt="" className='img-logo' /></Link>
                    </div>

                    <Form className="SearchBar">
                        <Form.Control
                        type="search"
                        placeholder="Busca nombres de mascotas"
                        className="me-2"
                        aria-label="Search"
                        onChange={(e) =>{
                            setFilter(e.target.value);
                        }}
                        />
                        <Link to={"/Search/" + filter}><Button variant="info"><BsSearch/></Button></Link>
                    </Form>
                        

                    <div  className={`links ${btnMenu ? 'activar' : '' } `}>
                        <div className='darMode'>
                            <DarkMode/>
                        </div>
                       
                        <div className='headerUser'>
                            <img src={datas.image} />
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