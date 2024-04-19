import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import brugerikon from "../assets/profil1.svg";
import burger from "../assets/burger.svg"

const DropdownMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="dropdown-menu">
      <button className="dropdown-button" onClick={toggleMenu}>
        <img src={burger} alt="Burger menu" />
      </button>
      {menuOpen && (
        <div className="dropdown-content">
            <NavLink to="/forside" className="navlink">Forside</NavLink>
            <NavLink to="/omosside" className="navlink">Om Plan.et</NavLink>
            <NavLink to="/loginside" className="navlink"><img src={brugerikon} alt="bruger ikon"></img> Log ind</NavLink>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;