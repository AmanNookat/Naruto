import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanBattleSlots } from "../../store/company/companyActions";
import { useNavigate } from "react-router-dom";
import {
  clearCardsForBattle,
  getCardsForBattle,
} from "../../store/company/companySlice";
import { NOTIFY_TYPES, notify } from "../../helpers/functions";

const BattleMenu = ({ setModal }) => {
  const { oneLevel, cardsForBattle } = useSelector((state) => state.company);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //   useEffect(() => {
  //     dispatch(getCardsForBattle());
  //   }, [checkCard]);

  useEffect(() => {
    cleanBattleSlots();
    dispatch(clearCardsForBattle());
  }, [oneLevel]);

  function goToBattle() {
    if (cardsForBattle.length) {
      navigate(`/battleField/${oneLevel.id}`);
    } else {
      notify("Выберите карты", NOTIFY_TYPES.error);
    }
  }

  return (
    <>
      {oneLevel && (
        <>
          <button
            onClick={() => {
              setModal(false);
            }}
          >
            Закрыть модалку
          </button>
          <p>{oneLevel.enemy.name}</p>
          <img src={oneLevel.enemy.image} alt="" width="100" height="100" />
          <p>{oneLevel.enemy.power}</p>
          <button onClick={goToBattle}>В БОЙ</button>
        </>
      )}
    </>
  );
};

export default BattleMenu;
