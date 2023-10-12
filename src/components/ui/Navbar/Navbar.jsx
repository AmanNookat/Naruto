import React, { useState } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import znakLista from "./NavImages/znakLista.png";
import "./Navbar.css";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav">
      <button className="burgerBtn" onClick={toggleMenu}>
        {isMenuOpen ? (
          <div className="burger--square__close">
            <p>X</p>
          </div>
        ) : (
          <div className="burger--square__open">
            <img src={znakLista} alt="" />
            <p>MENU</p>
          </div>
        )}
      </button>
      {isMenuOpen && (
        <div>
          <BurgerMenu />
        </div>
      )}
    </div>
  );
};

export default Navbar;
