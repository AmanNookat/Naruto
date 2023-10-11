import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkUserLogin } from "../../../helpers/functions";
import {
  checkCardInCart,
  toggleCardToCart,
} from "../../../store/cart/cartActions";
import { getCart } from "../../../store/cart/cartSlice";
import "./CardItem.css";

const CardItem = ({ card }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);
  const [isCardInCart, setIsCardInCart] = useState(false);

  useEffect(() => {
    if (checkCardInCart(card.id)) {
      setIsCardInCart(true);
    } else {
      setIsCardInCart(false);
    }
  }, [cart]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "20rem",
        border: "1px solid black",
        position: "relative", // Добавьте это свойство для .CardMain
      }}
      className="CardMain"
    >
      <div
        onClick={() => navigate(`/store/${card.id}`)}
        style={{
          width: "auto",
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
          position: "relative", // Добавьте это свойство
        }}
      >
        <div className="CardInside">
          <img
            src={card.image}
            alt={card.name}
            width="299px"
            height="300px"
            style={{ objectFit: "cover" }}
            className="CardImage"
          />
          <div className="CardTextContainer">
            {" "}
            <span className="CardName">{card.name}</span>
          </div>
        </div>
        <span className="CardPrice">{card.price}$</span>
        <p className="CardPower">{card.power}</p>
      </div>
      <div>
        {checkUserLogin() && (
          <button
            style={{ padding: "10px" }}
            onClick={() => {
              toggleCardToCart(card);
              dispatch(getCart());
            }}
          >
            {isCardInCart ? "- корзина" : "+ корзина"}
          </button>
        )}
      </div>
    </div>
  );
};

export default CardItem;
