import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import {useNavigate} from "react-router-dom";
import { DataContext } from '../../Context/DataContext';
import MovingBanner from '../MovingBanner/MovingBanner';
import HeaderLogin from '../Header/HeaderLogin';


function Login() {

    const history = useNavigate()

    const { login, setUser} = useContext(DataContext)
    
    const [inputs, setInputs] = useState({
        
        email:"",
        password:"",

    });

    const[errors, setErrors] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}))
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


    const handleSubmit = (e) => {
        e.preventDefault();

        const err = validate(inputs)

        setErrors(err)

        fetch('http://localhost:3030/user/login',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(inputs)
        }).then((res) => {
            if(Object.keys(err).length === 0){
            res.json()          
            .then(data => {
            localStorage.setItem('user', JSON.stringify(data.user))
            localStorage.setItem('token', data.tokenAccess);
            // localStorage.getItem("user")

            let logged = data.user;
            // setUser(logged)
            login(logged);
            history("/");

            })
        }})
        .catch((err) => {
            console.log(err)
            history("/Login");
        })        

        
    }

    

    return (

        <>
            <h1>Bienvenido!!!</h1>
                <div className='login'>
                    <div className='login-from'>
                        <form  action="" onSubmit= {(e) => handleSubmit(e)}>
                            <input type="email" placeholder='escribe tu email' name="email"
                                onChange={(e) => handleChange(e)} /> 

                            {errors.email ?<p>{errors.email}</p> : ""}
                            
                            <input type="password" placeholder='escribe tu password' name="password" 
                                onChange={(e) => handleChange(e)}/>

                            {errors.password ?<p>{errors.password}</p> : ""}

                            <button>Iniciar Sesión</button>

                            <div className='btn-login'>
                                <Link to='/register'>Crea tu cuenta</Link>
                            </div>
                        </form>

                    </div>

                    <MovingBanner />

                </div>
        </>
    )
}

export default Login
