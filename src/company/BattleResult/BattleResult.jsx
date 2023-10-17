import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { userLose, userWin } from "../../store/company/companyActions";

const BattleResult = ({ resultModal, cardsForBattle }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (resultModal == 1) {
      dispatch(userWin(id));
    }
    dispatch(userLose(cardsForBattle));
  }, [resultModal]);

  return (
    <div style={{ backgroundColor: "white" }}>
      {resultModal && (
        <>
          {resultModal === 1 ? (
            <div>
              <h1>Победа</h1>
              <p>Поздравляю с победой</p>
              <Link to="/company">Вернуться</Link>
            </div>
          ) : (
            <div>
              <h1>Поражение</h1>
              <p>К сожалению вы потеряли половину своих очков</p>
              <Link to="/company">Вернуться</Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BattleResult;
