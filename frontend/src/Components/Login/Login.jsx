import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import {useNavigate} from "react-router-dom";
import { useDataContext } from '../../Context/DataContext';
import MovingBanner from '../MovingBanner/MovingBanner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {

    const history = useNavigate()

    const { login } = useDataContext();
    const notify = (error) => toast(error, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
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
              console.log(data)
              if(data.message){
                notify(data.message)
              }
            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('token', data.tokenAccess);
            let logged = data.user.id;
            login(logged);
            history("/home");
            })
            }})
          .catch((err) => {
            console.log(err)
           
            
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
                                <Link to='/newPassword'>Rec.Contraseña</Link>
                            </div>
                            <div className='btn-login'>
                                <Link to='/register'>Crea tu cuenta</Link>
                            </div>
                            
                        </form>

                    </div>

                    <MovingBanner />
<ToastContainer/>
                </div>
        </>
    )
}

export default Login
