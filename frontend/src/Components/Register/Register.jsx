import React,{useState} from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import img from '../Img/img-login-register.png';
import { useNavigate } from "react-router-dom";

function Register() {

    const history = useNavigate()

    const [input, setInputs] = useState({
        name:'',
        petName:'',        
        petAge:'',
        breed:'',
        description:'',
        image:'',
        gender:'',
        email:'',
        password:''
    });

    const[errors, setErrors] = useState({});

    const handleChange = (e) => {
        if(e.target.name === 'image'){
            setInputs({
              ...input,
              [e.target.name]: e.target.files,
            })
    
          }else{
              setInputs({
              ...input,
              [e.target.name]: e.target.value
            })
          }
    }

    function validate(datos){
        let errors = {}

        if(!datos.name){
            errors.name = '*Se requiere el nombre de usuario';
        }

        if(!datos.petName){
            errors.petName = '*Se requiere el nombre de la mascota';
        }

        if(!datos.breed){
            errors.breed = '*Se requiere la raza';
        }

        if(!datos.description){
            errors.description = '*Se requiere una descripción';
        }
        
        if(!datos.image){
            errors.image = '*Se requiere una imagen de perfil';
        }

        if(!datos.gender){
            errors.gender = '*Se requiere el género';
        }

        if(!datos.petAge){
            errors.petAge = '*Se requiere la edad de la mascota';
        }

        if(!datos.email){
            errors.email = '*Se requiere el email';
        }

        if(datos.password.length < 5){
            errors.password = '*Se requiere la password que sea mayor a 8 caracteres';
        }
        
        return errors;
        
    } 

    function handleSubmit(e){
        e.preventDefault();

        const formData = new FormData();

        formData.append("name", input.name);
        formData.append("petName", input.petName);
        formData.append("petAge", input.petAge);
        formData.append("breed", input.breed);
        formData.append("description", input.description);
        formData.append("image", input.image[0]);
        formData.append("gender", input.gender);
        formData.append("email", input.email);
        formData.append("password", input.password);

        const err = validate(input)

        setErrors(err)



            fetch('http://localhost:3030/user',{
                method:'POST',
                body: formData,
              }).then((res) => {
                if(Object.keys(err).length === 0){
                    res.json()
                    .then((data) => {
                      console.log(data);
                      history('/login');
                    })
                 }
                })
              .catch((err) => console.log(err))
            
        }

    

    return (
        <>
            <div className='register'>
                    <div className='register-from'>
                        <form  className='' action="" onSubmit= {handleSubmit}>

                            Nombre del usuario
                            <input type="text" placeholder='Ingrese tu nombre' name="name" 
                                 onChange={handleChange}/>
                            {errors.name ?<p>{errors.name}</p> : ""}

                            Nombre de la mascota
                            <input type="text" placeholder='Ingrese el nombre de tu mascota' name="petName" 
                                 onChange={handleChange}/>
                            {errors.petname ?<p>{errors.petname}</p> : ""}

                            Edad
                            <input type="number" placeholder='Ingrese la edad de su mascota' name="petAge" 
                                 onChange={handleChange}/>
                            {errors.petAge ?<p>{errors.petAge}</p> : ""}

                            Raza
                            <input type="text" placeholder='Ingrese la raza de tu mascota' name="breed" 
                                 onChange={handleChange}/>
                            {errors.breed ?<p>{errors.breed}</p> : ""}

                            Sexo
                            <input type="text" placeholder='Ingrese el sexo de su mascota' name="gender" 
                                 onChange={handleChange}/>
                            {errors.gender ?<p>{errors.gender}</p> : ""}

                            Descripción
                            <input type="text" placeholder='Ingrese la descripción de tu mascota' name="description" 
                                 onChange={handleChange}/>
                            {errors.description ?<p>{errors.description}</p> : ""}

                            Imagen de Perfil
                            <input type="file" placeholder='Ingrese una imagen de perfil para su mascota' name="image" onChange={handleChange}/>
                            {errors.image ?<p>{errors.image}</p> : ""}

                            Correo electrónico
                            <input type="email" placeholder='Ingrese su correo electrónico' name="email" 
                                 onChange={(e) => handleChange(e)}/>
                            {errors.email ?<p>{errors.email}</p> : ""}

                            Contraseña
                            <input type="password" placeholder='Ingrese su password' name="password" 
                                 onChange={(e) => handleChange(e)}/>
                            {errors.password ?<p>{errors.password}</p> : ""}

                            <button>Crea tu cuenta</button>

                            <div className='btn-login'>
                                <Link to='/login'>Iniciar Sesión</Link>
                            </div>
                        </form>

                    </div>

                    <div className='register-img'>
                        <img src={img} alt="" />
                        <p>Crea una página para compartir las historia de tu mascota.</p>
                    </div>

                </div>
        </>
    )
}

export default Register
