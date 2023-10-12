import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  cardColorChange,
  checkUserLogin,
  getAuthUser,
} from "../../../helpers/functions";
import {
  checkCardInCart,
  toggleCardToCart,
} from "../../../store/cart/cartActions";
import { getCart } from "../../../store/cart/cartSlice";
import CardLike from "../CardLike/CardLike";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./CardItem.css";
import { toggleCardFavorite } from "../../../store/users/usersActions";

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
        position: "relative",
        ...cardColorChange(card.rank),
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
          position: "relative",
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
        <p className="CardPower">{card.power}</p>
      </div>
      <div className="CardFooter">
        {checkUserLogin() && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CardLike
                isLikedCard={isLikedCard}
                likes={card.likes}
                cardId={card.id}
              />
              <span className="CardLikes">
                {card.likes ? card.likes.length : 0}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                // justifyContent: "space-around",
              }}
            >
              <span className="CardPrice">{card.price}$</span>
              <div
                style={{ padding: "5px" }}
                onClick={() => {
                  toggleCardToCart(card);
                  dispatch(getCart());
                }}
              >
                {isCardInCart ? (
                  <ShoppingCartIcon fontSize="large" color="primary" />
                ) : (
                  <ShoppingCartIcon fontSize="large" />
                )}
              </div>
            </div>
            <div
              className="CardLikeButton"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></div>
            <button
              onClick={() => {
                dispatch(toggleCardFavorite({ card }));
              }}
            >
              Fav
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardItem;
