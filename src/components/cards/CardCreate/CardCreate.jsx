import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCard, getCategories } from "../../../store/cards/cardsActions";
import { NOTIFY_TYPES, notify } from "../../../helpers/functions";

const CardCreate = () => {
  //   const { categories } = useSelector((state) => state.cards);
  const [card, setCard] = useState({
    name: "",
    image: "",
    price: 0,
    rank: "",
    power: 0,
    description: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  function addCard() {
    for (let key in card) {
      if (!card[key]) return notify("Заполните все поля", NOTIFY_TYPES.error);
    }
    dispatch(createCard({ card }));
    navigate("/store");
  }

  return (
    <div>
      <h2>Добавить нового героя</h2>
      <input
        type="text"
        placeholder="имя"
        onChange={(e) => setCard({ ...card, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="ссылка на фото"
        onChange={(e) => setCard({ ...card, image: e.target.value })}
      />
      {/* поставить вместо инпута для рангов select и option */}
      <input
        type="text"
        placeholder="ранг"
        onChange={(e) => setCard({ ...card, rank: e.target.value })}
      />
      <input
        type="number"
        placeholder="цена"
        onChange={(e) => setCard({ ...card, price: e.target.value })}
      />
      <input
        type="number"
        placeholder="сила"
        onChange={(e) => setCard({ ...card, power: e.target.value })}
      />
      <textarea
        cols="30"
        rows="10"
        placeholder="описание"
        onChange={(e) => setCard({ ...card, description: e.target.value })}
      ></textarea>
      <button onClick={addCard}>Добавить героя</button>
    </div>
  );
};

export default CardCreate;
