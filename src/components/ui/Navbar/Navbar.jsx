import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">Домой</NavLink>
      <NavLink to="/store">Магазин</NavLink>
      <NavLink to="/registration">Регистрация</NavLink>
      <NavLink to="/authorization">Авторизация</NavLink>
    </div>
  );
};

export default Navbar;
