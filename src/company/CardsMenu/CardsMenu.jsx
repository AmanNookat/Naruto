import React, { useEffect, useState } from "react";
import CardInvet from "../../components/cards/CardInvent/CardInvet";
import { useDispatch, useSelector } from "react-redux";
import {
  chooseCardForBattle,
  cleanBattleSlots,
} from "../../store/company/companyActions";
import {
  checkCardInSlot,
  getCardsForBattle,
} from "../../store/company/companySlice";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const CardsMenu = () => {
  const { inventory, oneUser } = useSelector((state) => state.users);
  const { checkCard } = useSelector((state) => state.company);
  const [chosenCards, setChosenCards] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      //   cleanBattleSlots();
    };
  }, []);

  //   useEffect(() => {
  //     dispatch(getCardsForBattle());
  //   }, [checkCard]);

  // это функция старшего брата
  const handleCardClick = (card) => {
    chooseCardForBattle(card);
    dispatch(checkCardInSlot(card.id));

    if (chosenCards.includes(card.id)) {
      setChosenCards(chosenCards.filter((id) => id !== card.id));
    } else {
      setChosenCards([...chosenCards, card.id]);
    }
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <p>Выбери карты для боя</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          gap: "20px",
          width: "30%",
          overflow: "hidden",
          border: "1px solid black",
        }}
      >
        {oneUser && (
          <>
            {inventory.map((card) => (
              <div
                key={card.id}
                onClick={() => {
                  handleCardClick(card);
                  dispatch(getCardsForBattle());
                }}
              >
                <CardInvet card={card} />
                {chosenCards.includes(card.id) ? (
                  <CheckCircleIcon color="success" />
                ) : (
                  <CheckCircleIcon color="error" />
                )}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default CardsMenu;
