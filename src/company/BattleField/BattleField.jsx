import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  attackLogic,
  clearCardsForBattle,
  enemyAttackLogic,
  getCardsForBattle,
  getPowersForBattle,
} from "../../store/company/companySlice";
import {
  cleanBattleSlots,
  getOneLevel,
} from "../../store/company/companyActions";
import CardInvet from "../../components/cards/CardInvent/CardInvet";
import { useParams } from "react-router-dom";
import { getTeamPowers } from "../../helpers/functions";
import BattleResult from "../BattleResult/BattleResult";
import AttackModal from "../AttackModal/AttackModal";

const BattleField = () => {
  const {
    oneLevel,
    cardsForBattle,
    oneCardPower,
    enemyPower,
    step,
    resultModal,
  } = useSelector((state) => state.company);
  const [attack, setAttack] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneLevel(id));
    dispatch(getCardsForBattle(cardsForBattle, enemyPower));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(enemyAttackLogic());
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [step]);

  useEffect(() => {
    if (oneLevel) {
      dispatch(
        getPowersForBattle({
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

  return (
    <>
      <>
        {resultModal && (
          <BattleResult
            resultModal={resultModal}
            cardsForBattle={cardsForBattle}
          />
        )}
      </>
      <>{attack && <AttackModal attack={attack} setAttack={setAttack} />}</>
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
              <h1 style={{ fontSize: "25px" }}>HP/Power: {enemyPower}</h1>
              <CardInvet card={oneLevel.enemy} />
            </>
          )}
        </div>
        <p style={{ fontSize: "200px" }}>VS</p>
        <div>
          <>
            {cardsForBattle.map((card, index) => (
              <div key={`card${card.id}`}>
                <h1 style={{ fontSize: "25px" }}>
                  HP/Power: {oneCardPower[index]}
                </h1>
                <CardInvet card={card} />
                <button
                  onClick={() => {
                    setAttack(true);
                    dispatch(attackLogic({ index, cardId: card.id }));
                  }}
                >
                  Attack
                </button>
              </div>
            ))}
          </>
        </div>
      </div>
    </>
  );
};

export default BattleField;
