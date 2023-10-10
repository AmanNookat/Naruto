import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { NOTIFY_TYPES, notify } from "../../../helpers/functions";
import { loginUser } from "../../../store/users/usersActions";

const AuthorizationForm = () => {
  const { loading } = useSelector((state) => state.users);

  const [user, setUser] = useState({
    name: "",
    mail: "",
    password: "",
    image: "",
    level: 1,
    inventory: [],
    points: 100,
    isAdmin: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function signIn() {
    if (!user.name.trim() || !user.mail.trim() || !user.password.trim()) {
      return notify("Заполните поля", NOTIFY_TYPES.warning);
    }

    const result = await dispatch(loginUser({ user }));
    if (result.payload) {
      notify("Добро пожаловать", NOTIFY_TYPES.success);
      navigate("/");
      setUser({
        name: "",
        mail: "",
        password: "",
        image: "",
        level: 1,
        inventory: [],
        points: 0,
        isAdmin: false,
      });
    }
  }
  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <p>
            Нет аккаунта? <Link to="/registration">Создать</Link>
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
              placeholder="пароль"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              value={user.password}
            />
            <button onClick={signIn}>Войти</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthorizationForm;
