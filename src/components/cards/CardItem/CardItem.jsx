import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkUserLogin, getAuthUser } from "../../../helpers/functions";
import {
  checkCardInCart,
  toggleCardToCart,
} from "../../../store/cart/cartActions";
import { getCart } from "../../../store/cart/cartSlice";
import CardLike from "../CardLike/CardLike";
import "./CardItem.css";

const CardItem = ({ card }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);
  const [isCardInCart, setIsCardInCart] = useState(false);
  const [isLikedCard, setIsLikedCard] = useState(false);

  useEffect(() => {
    if (checkCardInCart(card.id)) {
      setIsCardInCart(true);
    } else {
      setIsCardInCart(false);
    }
  }, [cart]);

  const checkCardLike = () => {
    const user = getAuthUser();
    if (!card.likes) return;
    const userLike = card.likes.find((like) => like.user === user);

    if (userLike) {
      setIsLikedCard(true);
    } else {
      setIsLikedCard(false);
    }
  };

  useEffect(() => {
    checkCardLike();
  }, []);

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
          <>
            <button
              style={{ padding: "10px" }}
              onClick={() => {
                toggleCardToCart(card);
                dispatch(getCart());
              }}
            >
              {isCardInCart ? "- корзина" : "+ корзина"}
            </button>
            <button>
              <CardLike
                isLikedCard={isLikedCard}
                likes={card.likes}
                cardId={card.id}
              />
            </button>
          </>
        )}

        {card.likes ? <span>{card.likes.length}</span> : <span>0</span>}
      </div>
    </div>
  );
};

export default CardItem;
