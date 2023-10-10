import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { NOTIFY_TYPES, notify } from "../../../helpers/functions";
import { createUser } from "../../../store/users/usersActions";

const RegistrationForm = () => {
  const { loading } = useSelector((state) => state.users);
  const [user, setUser] = useState({
    name: "",
    mail: "",
    password: "",
    image: "",
    level: 1,
    inventory: [],
    isAdmin: false,
    points: 0,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function signUp() {
    if (
      !user.name.trim() ||
      !user.mail.trim() ||
      !user.password.trim() ||
      !user.image.trim()
    ) {
      return notify("Заполните поля", NOTIFY_TYPES.warning);
    }

    const result = await dispatch(createUser({ user }));

    if (result.payload) {
      notify("Регистрация прошла успешно", NOTIFY_TYPES.success);
      navigate("/login");
      setUser({
        name: "",
        mail: "",
        password: "",
        image: "",
        level: 1,
        inventory: [],
        isAdmin: false,
        points: 0,
      });
    }
  }

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h1>Регистрация</h1>
          <p>
            Уже есть аккаунт? <Link to="/login">Войти</Link>
          </p>
          <div>
            <input
              type="text"
              placeholder="логин"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              value={user.name}
            />
            <input
              type="text"
              placeholder="mail"
              onChange={(e) => setUser({ ...user, mail: e.target.value })}
              value={user.mail}
            />
            <input
              type="text"
              placeholder="ссылка на изображение"
              onChange={(e) => setUser({ ...user, image: e.target.value })}
              value={user.image}
            />
            <input
              type="text"
              placeholder="пароль"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              value={user.password}
            />
            <button onClick={signUp}>Создать аккаунт</button>
          </div>
        </>
      )}
    </div>
  );
};

export default RegistrationForm;
