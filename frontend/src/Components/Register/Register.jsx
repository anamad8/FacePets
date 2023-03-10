import React,{useState} from 'react';
import './Register.css';
import MovingBanner from '../MovingBanner/MovingBanner';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Register() {

    const history = useNavigate()
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
    const [stateSelect, setStateSelect] = useState(input.gender);
    

    const handleChange = (e) => {
        if(e.target.name === 'image'){
            setInputs({
                ...input,
                [e.target.name]: e.target.files,
            })} else if(e.target.name === "gender"){
                setInputs({
                    ...input,
                    [e.target.name]: e.target.value,
                });
                setStateSelect(e.target.value);
            }else{
                setInputs({
                    ...input,
                [e.target.name]: e.target.value
                })
        }
    }

    function validate(datos){
        let errors = {}

        if(datos.name.length < 3){
            errors.name = '*Minimo 3 letras';
            
        }

        if(datos.petName.length < 3){
            errors.petName = '*Minimo 3 letras';
            

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

        if(Object.keys(err).length === 0){
            fetch('http://localhost:3030/user',{
                method:'POST',
                body: formData,
            }).then((res) => {
                    res.json()
                    .then((data) => {
                        console.log(data);
                        history('/');
                    })
                }
                )
            .catch((err) => console.log(err))
        }else{
       notify("Ocurrio un error en la carga de datos")

        }}



    return (
        <>
            <div className='register'>
                    <div className='register-from'>
                        <form  action="" onSubmit= {handleSubmit}>

                            <label htmlFor="name">Nombre del usuario</label> 
                            <input type="text" placeholder='Ingrese tu nombre' name="name" 
                                onChange={handleChange}/>
                            {errors.name ?<p>{errors.name}</p> : ""}

                            <label htmlFor="petName">Nombre de la mascota</label> 
                            <input type="text" placeholder='Ingrese el nombre de tu mascota' name="petName" 
                                onChange={handleChange}/>
                            {errors.petname ?<p>{errors.petname}</p> : ""}

                            <label htmlFor="petAge">Edad</label>
                            <input type="number" placeholder='Ingrese la edad de su mascota' name="petAge" 
                                onChange={handleChange}/>
                            {errors.petAge ?<p>{errors.petAge}</p> : ""}

                            <label htmlFor="breed">Raza</label>
                            <input type="text" placeholder='Ingrese la raza de tu mascota' name="breed" 
                                onChange={handleChange}/>
                            {errors.breed ?<p>{errors.breed}</p> : ""}

                            <label htmlFor="gender">Sexo</label>
                            <select
                            value={stateSelect}
                            name="gender"
                            onChange={handleChange}
                            >
                                <option value="">Seleccione una...</option>
                                <option value="0">Masculino</option>
                                <option value="1">Femenino</option>
                            </select>
                            {errors.gender ?<p>{errors.gender}</p> : ""}

                            <label htmlFor="description">Descripción</label>
                            <input type="text" placeholder='Ingrese la descripción de tu mascota' name="description" 
                                onChange={handleChange}/>
                            {errors.description ?<p>{errors.description}</p> : ""}
                            
                            <label htmlFor="image">Imagen de Perfil</label>
                            <input type="file" placeholder='Ingrese una imagen de perfil para su mascota' name="image" onChange={handleChange}/>
                            {errors.image ?<p>{errors.image}</p> : ""}

                            <label htmlFor="email">Correo electrónico</label>
                            <input type="email" placeholder='Ingrese su correo electrónico' name="email" 
                                onChange={(e) => handleChange(e)}/>
                            {errors.email ?<p>{errors.email}</p> : ""}

                            <label htmlFor="password">Contraseña</label>
                            <input type="password" placeholder='Ingrese su password' name="password" 
                                onChange={(e) => handleChange(e)}/>
                            {errors.password ?<p>{errors.password}</p> : ""}

                            <button>Crea tu cuenta</button>

                            <div className='btn-login'>
                                <Link to='/'>Iniciar Sesión</Link>
                            </div>
                        </form>

                    </div>
                    <ToastContainer />

                <MovingBanner />
                </div>
        </>
    )
}

export default Register
