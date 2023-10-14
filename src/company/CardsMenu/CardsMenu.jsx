import React, { useEffect, useState } from "react";
import CardInvet from "../../components/cards/CardInvent/CardInvet";
import { useDispatch, useSelector } from "react-redux";
import { chooseCardForBattle } from "../../store/company/companyActions";
import { getCardsForBattle } from "../../store/company/companySlice";
const CardsMenu = () => {
  const { inventory, oneUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      //   cleanBattleSlots();
    };
  }, []);

  return (
    <div style={{ marginTop: "50px", height: "350px", width: "100%" }}>
      <p>Выбери карты для боя</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "300px",
          height: "100%",
          overflowY: "auto",
          border: "1px solid black",
        }}
      >
        {oneUser && (
          <>
            {inventory.map((card) => (
              <div
                key={card.id}
                onClick={() => {
                  chooseCardForBattle(card);
                  dispatch(getCardsForBattle());
                }}
              >
                <CardInvet card={card} />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default CardsMenu;
