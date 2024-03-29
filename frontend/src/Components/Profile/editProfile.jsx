import { render } from "@testing-library/react";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDataContext} from "../../Context/DataContext";
import './editProfile.css'


const EditProfile = () => {
  const { datas, user } = useDataContext();
  const navigate = useNavigate(0);
  const [state, setState] = useState({
    name: "",
    petName: "",
    image: "",
    petAge: 0,
    description: "",
    breed: "",
    gender: "",
    banner: "",
  });
  const [stateSelect, setStateSelect] = useState(state.gender);
  const handleChange = (e) => {
    if (e.target.name === "image" || e.target.name === "banner") {
      setState({
        ...state,
        [e.target.name]: e.target.files,
      });
    } else if (e.target.name === "gender") {
      setState({
        ...state,
        [e.target.name]: e.target.value,
      });
      setStateSelect(e.target.value);
    } else {
      setState({
        ...state,
        [e.target.name]: e.target.value,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formdataBanner = new FormData();
    const formData = new FormData();
    if (state.banner != "") {
      formdataBanner.append("imageBanner", state.banner[0]);
    }
    if (state.name != "") {
      formData.append("name", state.name);
    }
    if (state.petName != "") {
      formData.append("petName", state.petName);
    }
    if (state.gender != "") {
      formData.append("gender", state.gender);
    }
    if (state.petAge != 0) {
      formData.append("petAge", state.petAge);
    }
    if (state.breed != "") {
      formData.append("breed", state.breed);
    }
    if (state.description != "") {
      formData.append("description", state.description);
    }
    if (state.image != "") {
      formData.append("image", state.image[0]);
    }
   
    fetch("http://localhost:3030/user/banner/" + user.id, {
      method: "PATCH",
      body: formdataBanner,
    })
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        window.location.reload(false);
      })
      .catch((err) => console.log(err));

    fetch("http://localhost:3030/user/" + user.id, {
      method: "PATCH",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate('/profile');
        window.location.reload(false);
        
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div id="modalContainer">
        <div className="modal">
          <form onSubmit={handleSubmit}>
            <div className="editImagen">
              <p>Imagen de Perfil</p>
              <img src={datas.image} />
              <input type="File" name="image" onChange={handleChange} />
            </div>

            <div>
              <div className="input">
                <p>Banner</p>
                <input type="File" name="banner" onChange={handleChange} />
              </div>
              <div className="input">
                <p>Nombre del dueño</p>
                <input
                  type="text"
                  placeholder={datas.name}
                  name="name"
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <p>Nombre de la mascota</p>
                <input
                  type="text"
                  placeholder={datas.petName}
                  name="petName"
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <p>Edad</p>
                <input
                  type="number"
                  placeholder={datas.petAge}
                  name="petAge"
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <p>Genero</p>
                <select
                  value={stateSelect}
                  name="gender"
                  onChange={handleChange}
                >
                  <option value="">Seleccione una...</option>
                  <option value="0">Masculino</option>
                  <option value="1">Femenino</option>
                </select>
              </div>

              <div className="input">
                <p>Raza</p>
                <input
                  type="text"
                  placeholder={datas.breed}
                  name="breed"
                  onChange={handleChange}
                />
              </div>
              <div className="input" id="textarea">
                <p>Descripcion</p>
                <textarea
                  name="description"
                  rows="5"
                  cols="33"
                  placeholder={datas.description}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="button">
                <button type="submit">Editar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
