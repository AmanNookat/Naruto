import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCards } from "../../../store/cards/cardsActions";
import CardItem from "../CardItem/CardItem";

const CardsList = () => {
  const { loading, cards } = useSelector((state) => state.cards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCards());
  }, []);

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "50px",
            justifyContent: "space-between",
            width: "80%",
            margin: "50px auto",
          }}
        >
          {/* для фильтрации, пагинации и т.д. */}
          {cards.map((card) => (
            <CardItem key={card.id} card={card} />
          ))}
        </div>
      )}
    </>
  );
};

export default CardsList;
