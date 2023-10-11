import React, { useEffect } from "react";
import { getCards, getCategories } from "../../../store/cards/cardsActions";
import { changeCategory } from "../../../store/cards/cardsSlice";
import { useDispatch, useSelector } from "react-redux";

const CardsFilter = () => {
  const { categories } = useSelector((state) => state.cards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div>
      <div className="w-1/6">
        <select
          onChange={(e) => {
            dispatch(changeCategory({ category: e.target.value }));
            dispatch(getCards());
          }}
        >
          <option value="all">all</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CardsFilter;
