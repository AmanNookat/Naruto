import { createSlice } from "@reduxjs/toolkit";
import { getLevels, getOneLevel } from "./companyActions";
import { NOTIFY_TYPES, notify } from "../../helpers/functions";

const companySlice = createSlice({
  name: "company",
  initialState: {
    levels: [],
    loading: false,
    oneLevel: null,
    checkCard: false,
    cardsForBattle: [],
  },
  reducers: {
    checkCardInSlot: (state, action) => {
      let battleCards = JSON.parse(localStorage.getItem("NarutoBattle"));
      const checkCard = battleCards.find(
        (oneCard) => action.payload === oneCard.id
      );
      if (checkCard) {
        state.checkCard = true;
      } else {
        state.checkCard = false;
      }
    },
    getCardsForBattle: (state) => {
      let inventoryInLocalStorage =
        JSON.parse(localStorage.getItem("NarutoBattle")) || [];
      state.cardsForBattle = inventoryInLocalStorage;
    },
    clearCardsForBattle: (state) => {
      state.cardsForBattle = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLevels.fulfilled, (state, action) => {
        state.loading = false;
        state.levels = action.payload;
      })
      .addCase(getOneLevel.fulfilled, (state, action) => {
        state.loading = false;
        state.oneLevel = action.payload;
      });
  },
});

export const { checkCardInSlot, getCardsForBattle, clearCardsForBattle } =
  companySlice.actions;
export default companySlice.reducer;
