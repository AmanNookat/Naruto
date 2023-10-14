import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  attackLogic,
  clearCardsForBattle,
  enemyAttackLogic,
  getCardsForBattle,
  getPowersForBattle,
  zeroHPLogic,
} from "../../store/company/companySlice";
import {
  cleanBattleSlots,
  getOneLevel,
} from "../../store/company/companyActions";
import CardInvet from "../../components/cards/CardInvent/CardInvet";
import { useNavigate, useParams } from "react-router-dom";
import { getTeamPowers, getTotalPower } from "../../helpers/functions";

const BattleField = () => {
  const {
    oneLevel,
    cardsForBattle,
    oneCardPower,
    enemyPower,
    teamPower,
    step,
  } = useSelector((state) => state.company);
  //   const [count, setCount] = useState(0);
  //   const [count2, setCount2] = useState(0);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneLevel(id));
    dispatch(getCardsForBattle());
  }, []);

  useEffect(() => {
    dispatch(enemyAttackLogic());
  }, [step]);

  useEffect(() => {
    if (oneLevel) {
      dispatch(
        getPowersForBattle({
          ourTotal: getTotalPower(),
          enemyTotal: oneLevel.enemy.power,
          powersArray: getTeamPowers(),
        })
      );
    }
  }, [oneLevel]);

  useEffect(() => {
    return () => {
      //   cleanBattleSlots();
      //   dispatch(clearCardsForBattle());
    };
  }, []);

  //   useEffect(() => {
  //     let totalPower = getTotalPower();
  //     if (count < totalPower) {
  //       const timer = setTimeout(() => {
  //         setCount(count + 1);
  //       }, 2000 / totalPower);
  //       return () => clearTimeout(timer);
  //     }
  //   }, [count]);

  //   useEffect(() => {
  //     if (oneLevel) {
  //       let totalPower = oneLevel.enemy.power;
  //       if (count2 < totalPower) {
  //         const timer = setTimeout(() => {
  //           setCount2(count2 + 1);
  //         }, 2000 / totalPower);
  //         return () => clearTimeout(timer);
  //       }
  //     }
  //   }, [count2, oneLevel]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <div>
        {oneLevel && (
          <>
            <h1 style={{ fontSize: "40px" }}>
              Total HP {enemyPower} {/*count2*/}
            </h1>
            <CardInvet card={oneLevel.enemy} />
          </>
        )}
      </div>
      <p style={{ fontSize: "200px" }}>VS</p>
      <div>
        <h1 style={{ fontSize: "40px" }}>
          Total HP {teamPower} {/*count*/}
        </h1>
        {/* {cardsForBattle && ( */}
        <>
          {cardsForBattle.map((card, index) => (
            <div key={`card${card.id}`}>
              <p>Сила карты {oneCardPower[index]}</p>
              <CardInvet card={card} />
              <button
                onClick={() => {
                  dispatch(attackLogic(index));
                }}
              >
                Attack
              </button>
            </div>
          ))}
        </>
        {/* )} */}
      </div>
    </div>
  );
};

export default BattleField;
