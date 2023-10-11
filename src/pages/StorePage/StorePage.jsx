import React from "react";
import CardsList from "../../components/cards/CardsList/CardsList";
import CardPagination from "../../components/cards/CardPagination/CardPagination";
import CardSearch from "../../components/cards/CardSearch/CardSearch";
// import CardsFilter from "../../components/cards/CardsFilter/CardsFilter";

const StorePage = () => {
  return (
    <div>
      <div className="searchAndFilter">
        {/* <CardsFilter /> */}
        <CardSearch />
      </div>
      <CardPagination />
      <CardsList />
    </div>
  );
};

export default StorePage;
