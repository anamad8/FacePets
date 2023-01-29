import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../../Context/DataContext";
import "react-toastify/dist/ReactToastify.css";
import "../Login/Login.css";
import MovingBanner from "../MovingBanner/MovingBanner";


const NewPassword = () => {
  const { login } = useDataContext();
  const navigate = useNavigate();
  
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const err = validate(inputs);
    setErrors(err);
    if (Object.keys(err).length === 0) {
      await fetch("http://localhost:3030/user/email/" + inputs.email)
        .then((res) => {
          res.json().then((data) => {
            console.log(data.data[0].email);
            fetch("http://localhost:3030/email/" + data.data[0].email, {
              method: "POST",
            })
              .then((res) => {
                res.json().then((data) => {});
              })
              .catch((err) => {
                console.log(err);
              });
          });
        })
        .catch((err) => {
          console.log(err);
        });
        navigate('/newPassword/successForgotPassword')
    }
  };
  return (
    <>
      <div className="login">
        <div
          className="login-from"
          style={{
            height: "max-content",
            padding: "10px",
            margin: "10px",
          }}
        >
          <form action="" onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label htmlFor="">Correo Electronico</label>
              <input
                type="email"
                placeholder="escribe tu email"
                name="email"
                onChange={(e) => handleChange(e)}
              ></input>
              {errors.email ? <p>{errors.email}</p> : ""}
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
        <MovingBanner />
        
      </div>
    </>
  );
};
export default NewPassword;
