import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCards } from "../../../store/cards/cardsActions";
import { setSearchVal } from "../../../store/cards/cardsSlice";

const CardSearch = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="relative w-1/6">
        <label htmlFor="Search" className="sr-only">
          {" "}
        </label>

        <input
          onChange={(e) => {
            dispatch(setSearchVal({ search: e.target.value }));
            dispatch(getCards());
          }}
          type="text"
          id="Search"
          placeholder="Search for..."
          className="search--input"
        />
      </div>
    </div>
  );
};

export default CardSearch;
