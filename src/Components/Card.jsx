import React, { useContext } from "react";
import DoctorImage from "../images/doctor.jpg"
import FavoriteIcon from "../images/ico-favorites.png"
import { ContextGlobal } from "./utils/global.context";
import "../index.css";

const Card = ({ name, username, id }) => {
  const { dispatch } = useContext(ContextGlobal);

  const addFav = ()=>{
    dispatch({type: "ADD_FAV", payload: {name, username, id}})
  }

  return (
    <div className="card">
        <img className="card-image" src={DoctorImage} alt="Doctor" />
        <h2><a href={`dentist/${id}`}>{name}</a></h2>
        <p>{id} - {username}</p>
        <button onClick={addFav} className="favButton"><img className="img-icon" src={FavoriteIcon} alt="Add favorites"></img></button>
    </div>
  );
};

export default Card;
