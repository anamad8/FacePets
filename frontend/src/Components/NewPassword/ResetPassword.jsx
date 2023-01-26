import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../../Context/DataContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Login/Login.css";
import MovingBanner from "../MovingBanner/MovingBanner";

const ResetPassword = () => {
  const { email } = useParams();
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
    password: "",
    password1: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  function validate(datos) {
    let errors = {};

    if (!datos.password) {
      errors.password = "*Se requiere la contraseña";
    }
    if (datos.password.length < 8) {
      errors.password = "*Se requiere la password que sea mayor a 8 caracteres";
    }
    if (datos.password != datos.password1) {
      errors.password = "*Se requiere que las contraseñas sean iguales";
    }
    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate(inputs);
   
    let Password = inputs.password

    setErrors(err);
    
    if (Object.keys(err).length === 0) {
      fetch(`http://localhost:3030/user/email/`+ email, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(Password)
      })
        .then((res) => {
          res.json();
        })
        .then((data) => {
          console.log(data);
          console.log(1);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <div className="login">
        <div className="login-from" style={{ padding: "10px", margin: "10px" }}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label htmlFor="password" style={{ display: "block" }}>
                Nueva Contraseña
              </label>
              <input
                type="password"
                placeholder="escriba su contraseña"
                name="password"
                onChange={(e) => handleChange(e)}
              ></input>
              {errors.password ? <p>{errors.password}</p> : ""}
            </div>
            <div>
              <label htmlFor="password1" style={{ display: "block" }}>
                Repetir contraseña
              </label>
              <input
                type="password"
                placeholder="escriba su contraseña"
                name="password1"
                onChange={(e) => handleChange(e)}
              ></input>
              {errors.password ? <p>{errors.password}</p> : ""}
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
        <MovingBanner />
        <ToastContainer />
      </div>
    </>
  );
};
export default ResetPassword;
