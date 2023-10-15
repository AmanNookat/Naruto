import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCardsForBattle } from "../../store/company/companySlice";

const CardsForBattle = () => {
  const { cardsForBattle } = useSelector((state) => state.company);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCardsForBattle());
  }, []);

  console.log(cardsForBattle);

  return (
    <div>
      <h1>Ваша команда</h1>
      <div style={{ display: "flex" }}>
        {cardsForBattle.map((card) => (
          <div key={card.id}>
            <img
              src={card.image}
              alt=""
              width="100"
              height="100"
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsForBattle;
