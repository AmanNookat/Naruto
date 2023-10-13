import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  cardColorChange,
  checkCardInFavorites,
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
import { toggleCardFavorite } from "../../../store/users/usersActions";
import StarIcon from "@mui/icons-material/Star";

const CardFooter = ({ card }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { oneUser } = useSelector((state) => state.users);
  const { cart } = useSelector((state) => state.cart);
  const [isCardInCart, setIsCardInCart] = useState(false);
  const [isLikedCard, setIsLikedCard] = useState(false);
  const [isFavCard, setIsFavCard] = useState(false);

  useEffect(() => {
    if (checkCardInCart(card.id)) {
      setIsCardInCart(true);
    } else {
      setIsCardInCart(false);
    }
  }, [cart]);

  useEffect(() => {
    if (checkCardInFavorites(card.id)) {
      setIsFavCard(true);
    } else {
      setIsFavCard(false);
    }
  }, [oneUser]);

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
            {isFavCard ? (
              <StarIcon fontSize="large" color="warning" />
            ) : (
              <StarIcon fontSize="large" />
            )}
          </button>
          <button onClick={() => navigate(`/store/${card.id}`)}>about</button>
        </div>
      )}
    </div>
  );
};

export default CardFooter;