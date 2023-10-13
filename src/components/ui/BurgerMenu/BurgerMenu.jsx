import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getOneUser } from "../../../store/users/usersSlice";
import { checkAdmin, checkUserLogin, logout } from "../../../helpers/functions";
import { getOneQuiz } from "../../../store/quizzes/quizzesActions";
import burgerBackground from "./images/burgerMenu.png";
import "./BurgerMenu.css";
const BurgerMenu = ({ closeBurgerMenu }) => {
  const { oneUser } = useSelector((state) => state.users);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneUser());
    dispatch(getOneQuiz());
  }, []);

  return (
    <div className="burger--container">
      <div className="burger--back">
        <img src={burgerBackground} alt="" />
      </div>
      <div className="burger--links" onClick={() => closeBurgerMenu()}>
        <NavLink to="/">Домой</NavLink>
        <NavLink to="/store">Магазин</NavLink>
        {checkUserLogin() ? (
          <>
            <NavLink to="/quizzes">Викторины</NavLink>
            <NavLink to="/cart">Корзина</NavLink>

            {checkAdmin() && <NavLink to="/card-create">Создать</NavLink>}
            {oneUser && (
              <>
                <NavLink to={`/user/${oneUser.id}`}>
                  {oneUser.name}
                  <span>({oneUser.points})</span>
                </NavLink>
              </>
            )}
            <button
              onClick={() => {
                logout();
                navigate("/");
              }}
            >
              Выход
            </button>
          </>
        ) : (
          <>
            <NavLink to="/registration">Регистрация</NavLink>
            <NavLink to="/authorization">Авторизация</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default BurgerMenu;
