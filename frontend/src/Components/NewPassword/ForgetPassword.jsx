import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import {useNavigate} from "react-router-dom";
import { useDataContext } from '../../Context/DataContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../Login/Login.css"
import MovingBanner from '../MovingBanner/MovingBanner';

const NewPassword = () => {
  const { login } = useDataContext();
  const notify = (error) =>
    toast(error, {
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
    email: "",
    password: "",
  });
const [idEmail, setIdEmail] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  function validate(datos) {
    let errors = {};

    if (!datos.email) {
      errors.email = "*Se requiere el email";
    }
    return errors;
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const err = validate(inputs);
    setErrors(err);
    if (Object.keys(err).length === 0) {
      await fetch("http://localhost:3030/user/email/" + inputs.email, {})
        .then((res) => {
          res.json().then(data => {
            if (data.message) {
              notify(data.message);
            }
            console.log(data);
            setIdEmail(data.data[0].email)
            console.log(idEmail)
          });
        })
        .catch((err) => {
          console.log(err);
        });
        if(idEmail){
            await fetch("http://localhost:3030/email/" +idEmail, {
                method:'POST'
            })
        .then((res) => {
          res.json().then(data => {
            if (data.message) {
              notify(data.message);
            }
            console.log(data);
          });
        })
        .catch((err) => {
          console.log(err);
        });
        }
    }
  };
  return (
    <>
      <div className="login">
        <div className="login-from" style={{
          height: 'max-content',
          padding: '10px',
          margin: '10px'
        }}>
          <form action="" onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label htmlFor="">Correo Electronico</label>
              <input
                type="email"
                placeholder="escribe tu email"
                name="email"
                onChange={(e) => handleChange(e)}
              ></input>
               {errors.email ?<p>{errors.email}</p> : ""}
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
        <MovingBanner/>
        <ToastContainer/>
      </div>
    </>
  );
};
 export default NewPassword