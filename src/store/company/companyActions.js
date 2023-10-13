import { createAsyncThunk } from "@reduxjs/toolkit";
import { COMPANY_API } from "../../helpers/consts";
import axios from "axios";
import { NOTIFY_TYPES, notify } from "../../helpers/functions";

export const getLevels = createAsyncThunk("company/getLevels", async () => {
  const { data } = await axios.get(COMPANY_API);
  return data;
});

export const getOneLevel = createAsyncThunk(
  "company/getOneLevel",
  async (id) => {
    const { data } = await axios.get(`${COMPANY_API}/${id}`);
    return data;
  }
);

export const chooseCardForBattle = (card) => {
  let battleCards = JSON.parse(localStorage.getItem("NarutoBattle")) || [];
  const checkCard = battleCards.find((oneCard) => oneCard.id === card.id);

  if (checkCard) {
    battleCards = battleCards.filter((oneCard) => oneCard.id !== card.id);
    notify("Карта убрана из слота", NOTIFY_TYPES.error);
  } else {
    battleCards.push(card);
    notify("Карта готова к бою", NOTIFY_TYPES.success);
  }

  if (battleCards.length <= 4) {
    localStorage.setItem("NarutoBattle", JSON.stringify(battleCards));
    return true;
  } else {
    notify("В бою может участвовать максимум 4 карты", NOTIFY_TYPES.error);
    return false;
  }
};

export const cleanBattleSlots = () => {
  localStorage.removeItem("NarutoBattle");
};
