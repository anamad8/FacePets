import React from "react";
import { Link } from "react-router-dom";
import "./Comments.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDataContext } from "../../Context/DataContext";
const Comments = (props) => {
  //Comentarios temporales, armado de front para luego conexion con el back
  const { datas } = useDataContext();

  const eliminarComment = (ids) => {
    console.log(ids)
    // fetch(`http://localhost:3030/comment/${id}`, {
    //   method: "DELETE",
    // })
    //   .then((res) => {
    //     res.json().then((data) => {
    //       console.log(data);
    //       window.location.reload(false);
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <div className="comments" key={props.key}>
      {props.comment.map((e, key) => {
        console.log(e.id)
        return (
          <div className="comment">
            <Link to={`/profile/${e.user.id}`}>
              <img src={e.user.image} alt="" />
            </Link>

            <div className="info">
              <Link
                to={`/profile/${e.user.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span>{e.user.petName}</span>
              </Link>
              <p>{e.description}</p>
            </div>
            {/* {e.user.id === datas.id ? (
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle
                  split
                  variant="success"
                  id="dropdown-split-basic"
                  style={{ zIndex: 0}}
                />
                <Dropdown.Menu style={{zIndex: 0}}>
                  <Dropdown.Item onClick={eliminarComment}>
                    Eliminar
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <></>
            )} */}
            <span className="date">{e.createdAt}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
