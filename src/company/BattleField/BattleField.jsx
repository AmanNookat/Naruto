import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCardsForBattle,
  getCardsForBattle,
} from "../../store/company/companySlice";
import {
  cleanBattleSlots,
  getOneLevel,
} from "../../store/company/companyActions";
import CardInvet from "../../components/cards/CardInvent/CardInvet";
import { useNavigate, useParams } from "react-router-dom";
import { getTotalPower } from "../../helpers/functions";

const BattleField = () => {
  const { oneLevel, cardsForBattle } = useSelector((state) => state.company);
  const [count, setCount] = useState(0);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneLevel(id));
    dispatch(getCardsForBattle());
  }, []);

  useEffect(() => {
    let totalPower = getTotalPower();
    if (count < totalPower) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 2000 / totalPower);
      return () => clearTimeout(timer);
    }
  }, [count]);

  useEffect(() => {
    return () => {
      //   cleanBattleSlots();
      //   dispatch(clearCardsForBattle());
    };
  }, []);

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
            <p>{oneLevel.enemy.name}</p>
            <img src={oneLevel.enemy.image} alt="" width="100" height="100" />
          </>
        )}
      </div>
      <p style={{ fontSize: "200px" }}>VS</p>
      <div>
        <h1 style={{ fontSize: "40px" }}>Total Power {count}</h1>
        {cardsForBattle && (
          <>
            {cardsForBattle.map((card) => (
              <CardInvet key={`card${card.id}`} card={card} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default BattleField;
