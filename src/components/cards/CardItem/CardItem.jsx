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
import "./CardItem.css";
import StarIcon from "@mui/icons-material/Star";
import CardFooter from "../CardFooter/CardFooter";
import CardInvet from "../CardInvent/CardInvet";

const CardItem = ({ card }) => {
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
    <div
      className="CardMain"
      style={{
        ...cardColorChange(card.rank),
      }}
    >
      <CardInvet card={card} />
      <CardFooter card={card} />
    </div>
  );
};

export default CardItem;
