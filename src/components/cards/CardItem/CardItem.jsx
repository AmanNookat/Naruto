import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkUserLogin } from "../../../helpers/functions";
import {
  checkCardInCart,
  toggleCardToCart,
} from "../../../store/cart/cartActions";
import { getCart } from "../../../store/cart/cartSlice";

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
      }}
    >
      <div
        onClick={() => navigate(`/store/${card.id}`)}
        style={{
          width: "auto",
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
        }}
      >
        <p>{card.name}</p>
        <img
          src={card.image}
          alt={card.name}
          width="auto"
          height="300px"
          style={{ objectFit: "cover" }}
        />
        <p>{card.price}$</p>
        <p>{card.power}</p>
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
