import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar-item">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/contacto">Contact</Link></li>
        <li><Link to="/dentist/:id">Detail</Link></li>
        <li><Link to="/favs">Favs</Link></li>
      </ul>
      <button>Change theme</button>
    </nav>
  );
};

export default Navbar;