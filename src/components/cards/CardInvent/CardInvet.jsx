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
import CardFooter from "../CardFooter/CardFooter";

const CardInvet = ({ card }) => {
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
    <div>
      <div
        style={{
          width: "auto",
          display: "flex",
          flexDirection: "column",
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
        </div>
        <p className="CardPower">{card.power}</p>
        <div className="CardTextContainer">
          {" "}
          <span className="CardName">{card.name}</span>
        </div>
      </div>
    </div>
  );
};

export default CardInvet;
