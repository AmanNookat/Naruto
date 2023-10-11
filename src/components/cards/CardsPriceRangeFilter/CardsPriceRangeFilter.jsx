import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPriceRangeState } from "../../../store/cards/cardsSlice";
import { getCards } from "../../../store/cards/cardsActions";

const CardsPriceRangeFilter = () => {
  const { priceRange } = useSelector((state) => state.cards);
  const [priceRangeVal, setPriceRangeVal] = useState({
    minPrice: "",
    maxPrice: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (!priceRange) {
      setPriceRangeVal({
        minPrice: "",
        maxPrice: "",
      });
    }
  }, [priceRange]);

  return (
    <div>
      <input
        type="number"
        placeholder="Минимальная цена"
        onChange={(e) =>
          setPriceRangeVal({ ...priceRangeVal, minPrice: +e.target.value })
        }
        value={priceRangeVal.minPrice}
      />
      <span>---</span>
      <input
        type="number"
        placeholder="Максимальная цена"
        onChange={(e) =>
          setPriceRangeVal({ ...priceRangeVal, maxPrice: +e.target.value })
        }
        value={priceRangeVal.maxPrice}
      />
      <button
        onClick={() => {
          dispatch(setPriceRangeState(priceRangeVal));
          dispatch(getCards());
        }}
      >
        Искать
      </button>
    </div>
  );
};

export default CardsPriceRangeFilter;