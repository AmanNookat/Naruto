import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCards } from "../../../store/cards/cardsActions";
import { setSearchVal } from "../../../store/cards/cardsSlice";

const CardSearch = () => {
  const { search } = useSelector((state) => state.cards);
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setSearchVal({ search: "" }));
  // }, [search]);

  return (
    <div>
      <div>
        <input
          onChange={(e) => {
            dispatch(setSearchVal({ search: e.target.value }));
            dispatch(getCards());
          }}
          type="text"
          placeholder="Поиск..."
          className="search--input"
        />
      </div>
    </div>
  );
};

export default CardSearch;
