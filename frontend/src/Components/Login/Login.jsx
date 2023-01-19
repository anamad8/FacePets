import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Header from '../../Components/Header/Header';
import img from '../Img/img-login-register.png';
import {useNavigate } from "react-router-dom";
import { DataContext } from '../../Context/DataContext';


function Login() {

    const history = useNavigate()

    const {user} = DataContext;

    const [login, setlogin] = useState({
        
        email:"",
        password:"",

    });

    const[errors, setErrors] = useState({});

    function handleChange(e) {
        setlogin({
            ...login,
            [e.target.name] : e.target.value
        })
    }

    function validate(datos){
        let errors = {}

        if(!datos.email){
            errors.email = '*Se requiere el email';
        }
        if(datos.password.length < 8){
            errors.password = '*Se requiere la password que sea mayor a 8 caracteres';
        }
        
        return errors;
        
    } 

    function handleSubmit(e){
        e.preventDefault();

        const err = validate(login)

        setErrors(err)

        fetch('http://localhost:3030/user/login',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(login)
          }).then((res) => 
            res.json() 
          ).then(data => {
            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('token', data.tokenAccess);
            let logged = data.user;
            user.setUser(logged);
          })
          .catch((err) => {
            console.log(err)
          })

        if(Object.keys(err).length === 0){
            history('/register')
        }

    }

    
    return (

        <>
            <Header/>

                <div className='login'>
                    <div className='login-from'>
                        <form  className='' action="" onSubmit= {(e) => handleSubmit(e)}>
                            <input type="email" placeholder='escribe tu email' name="email"
                                value= {login.email} onChange={(e) => handleChange(e)} /> 

                            {errors.email ?<p>{errors.email}</p> : ""}
                            
                            <input type="password" placeholder='escribe tu password' name="password" 
                                value= {login.password} onChange={(e) => handleChange(e)}/>

                            {errors.password ?<p>{errors.password}</p> : ""}

                            <button>Iniciar Sesión</button>

                            <div className='btn-login'>
                                <Link to='/register'>Crea tu cuenta</Link>
                            </div>
                        </form>

                    </div>

                    <div className='login-img'>
                        <img src={img} alt="" />
                        <p>Crea una página para compartir las historia de tu mascota.</p>
                    </div>

                </div>
        </>
    )
}

export default Login
