import React, { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'
import LightIcon from "../images/ico-light.png";
import DarkIcon from "../images/ico-dark.png";
import '../index.css'

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    dispatch({ type: "SET_THEME", payload: newTheme });
  };

  return (
    <nav className={`navbar ${state.theme === "dark" ? "dark" : ""}`}>
      <p>DH Odonto</p>
      <ul className="navbar-item">
        <li><a href="/home">Home</a></li>
        <li><a href="/contacto">Contact</a></li>
        <li><a href="/dentist/:id">Detail</a></li>
        <li><a href="/favs">Favs</a></li>
      </ul>
      <button onClick={toggleTheme}>
        <img 
          src={state.theme === "light" ? DarkIcon : LightIcon} 
          alt={state.theme === "light" ? "Dark Mode Icon" : "Light Mode Icon"} 
          className="img-icon"
        />
      </button>
    </nav>
  );
};

export default Navbar;