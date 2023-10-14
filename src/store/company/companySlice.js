import { createSlice } from "@reduxjs/toolkit";
import { getLevels, getOneLevel } from "./companyActions";
import { NOTIFY_TYPES, notify } from "../../helpers/functions";
import { act } from "react-dom/test-utils";

const companySlice = createSlice({
  name: "company",
  initialState: {
    levels: [],
    loading: false,
    oneLevel: null,
    cardsForBattle: [],
    step: 0,
    teamPower: 0,
    enemyPower: 0,
    oneCardPower: [],
    cardStatusInBattle: true,
  },
  reducers: {
    getCardsForBattle: (state) => {
      let inventoryInLocalStorage =
        JSON.parse(localStorage.getItem("NarutoBattle")) || [];
      state.cardsForBattle = inventoryInLocalStorage;
    },
    clearCardsForBattle: (state) => {
      state.cardsForBattle = [];
    },
    getPowersForBattle: (state, action) => {
      state.teamPower = action.payload.ourTotal;
      state.enemyPower = action.payload.enemyTotal;
      state.oneCardPower = action.payload.powersArray;
    },
    attackLogic: (state, action) => {
      let updatedEnemyPower;
      if (state.step % 2 == 0) {
        updatedEnemyPower =
          state.enemyPower - state.oneCardPower[action.payload];
        state.step = state.step + 1;
      }

      if (updatedEnemyPower < 0) {
        state.enemyPower = state.enemyPower = 0;
      } else {
        state.enemyPower = updatedEnemyPower;
      }
    },
    enemyAttackLogic: (state) => {
      if (state.step % 2 === 1) {
        const enemyAttack = Math.floor(
          Math.random() * state.cardsForBattle.length
        );

        console.log(enemyAttack + "enemy");
        let updatedCardPower =
          state.oneCardPower[enemyAttack] - state.enemyPower;

        if (updatedCardPower < 0) {
          state.cardsForBattle = state.cardsForBattle.filter((card, index) => {
            return index !== enemyAttack;
          });
          state.oneCardPower = state.oneCardPower.filter((card, index) => {
            return index !== enemyAttack;
          });
        } else {
          state.oneCardPower[enemyAttack] = updatedCardPower;
        }
        state.step = state.step + 1;
      }
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

export const {
  getPowersForBattle,
  getCardsForBattle,
  clearCardsForBattle,
  attackLogic,
  enemyAttackLogic,
  //   zeroHPLogic,
} = companySlice.actions;
export default companySlice.reducer;
