import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CARDS_API, USERS_API } from "../../helpers/consts";
import {
  NOTIFY_TYPES,
  addToLocalStorage,
  getAuthUser,
  getTotalPages,
  notify,
} from "../../helpers/functions";
import { deleteCardFromCart } from "../cart/cartActions";
import { deleteCardFromFavorite } from "../users/usersActions";
import { deleteCardFromInventory } from "../users/usersSlice";

export const createCard = createAsyncThunk(
  "cards/createCard",
  async ({ card }, { dispatch }) => {
    await axios.post(CARDS_API, card);
    dispatch(getCards());
  }
);

export const getCards = createAsyncThunk(
  "cards/getCards",
  async (_, { getState }) => {
    const { currentPage, currentCategory, search, sortByRating, priceRange } =
      getState().cards;
    const categoryAndSearchParams = `q=${search}${
      currentCategory && `&rank=${currentCategory}`
    }`;
    const pagesLimitParams = `?_page=${currentPage}&_limit=8`;
    const totalPages = await getTotalPages(
      `${CARDS_API}?${categoryAndSearchParams}${priceRange}${sortByRating}`
    );
    const { data } = await axios.get(
      `${CARDS_API}${pagesLimitParams}&${categoryAndSearchParams}${priceRange}${sortByRating}`
    );
    return { data, totalPages };
  }
);

export const getOneCard = createAsyncThunk(
  "cards/getOneCard",
  async ({ id }) => {
    const { data } = await axios.get(`${CARDS_API}/${id}`);
    return data;
  }
);

export const editCard = createAsyncThunk(
  "cards/editCard",
  async ({ card }, { dispatch }) => {
    await axios.patch(`${CARDS_API}/${card.id}`, card);
    dispatch(getCards());
  }
);

export const deleteCard = createAsyncThunk(
  "cards/deleteCard",
  async ({ id }, { dispatch }) => {
    await axios.delete(`${CARDS_API}/${id}`);
    dispatch(getCards());
    dispatch(deleteCardFromFavorite({ cardId: id }));
    deleteCardFromCart(id);
    dispatch(deleteCardFromInventory(id));
  }
);

export const getCategories = createAsyncThunk(
  "cards/getCategories",
  async () => {
    const { data } = await axios.get(CARDS_API);
    const uniqueCategories = new Set(data.map((card) => card.rank));
    const categories = [];
    for (let i of uniqueCategories) {
      categories.push(i);
    }
    return categories;
  }
);

export const toggleCardLike = createAsyncThunk(
  "card/toggleCardLike",
  async ({ setIsLike, likes, cardId }, { dispatch }) => {
    const user = getAuthUser();
    let updatedLikesArr;
    console.log(setIsLike);
    if (!likes) {
      updatedLikesArr = [];
    } else {
      updatedLikesArr = [...likes];
    }

    if (setIsLike) {
      updatedLikesArr.push({
        id: Date.now(),
        user,
      });
    } else {
      updatedLikesArr = updatedLikesArr.filter((like) => like.user !== user);
    }

    await axios.patch(`${CARDS_API}/${cardId}`, {
      likes: updatedLikesArr,
    });

    dispatch(getCards());
  }
);

export const unlockCard = createAsyncThunk(
  "cards/unclockCard",
  async ({ cardId }) => {
    const { data } = await axios.get(`${CARDS_API}/${cardId}`);
    const oneUser = JSON.parse(localStorage.getItem("NarutoUser"));
    const checkCard = oneUser.inventory.find((oneCard) => oneCard.id == cardId);

    if (checkCard) {
      notify("Эта карта уже есть", NOTIFY_TYPES.error);
    } else {
      if (oneUser.points >= data.price) {
        oneUser.points = +oneUser.points - +data.price;
        oneUser.inventory.push(data);
        await axios.patch(`${USERS_API}/${oneUser.id}`, oneUser);
        addToLocalStorage(oneUser);
        notify("Герой получен");
      } else {
        notify("Недостаточно средств", NOTIFY_TYPES.warning);
      }
    }
    return oneUser;
  }
);
