import React from "react";
import CardsList from "../../components/cards/CardsList/CardsList";
import CardPagination from "../../components/cards/CardPagination/CardPagination";
import CardSearch from "../../components/cards/CardSearch/CardSearch";
import CardsFilter from "../../components/cards/CardsFilter/CardsFilter";
import "./StorePage.css";
import CardsPriceRangeFilter from "../../components/cards/CardsPriceRangeFilter/CardsPriceRangeFilter";
import CardsSortRating from "../../components/cards/CardsSortRating/CardsSortRating";
import { clearAllFilters } from "../../store/cards/cardsSlice";
import { getCards } from "../../store/cards/cardsActions";
import { useDispatch } from "react-redux";

const StorePage = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="searchAndFilter">
        <CardsFilter />
        <CardSearch />
        <CardsPriceRangeFilter />
        <CardsSortRating />
        <button
          onClick={() => {
            dispatch(clearAllFilters());
            dispatch(getCards());
          }}
        >
          Сбросить фильтры
        </button>
      </div>
      <CardPagination />
      <CardsList />
    </div>
  );
};

export default StorePage;
