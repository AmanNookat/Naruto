import React from "react";
import { useParams } from "react-router-dom";
import FavoritesList from "../../components/favorites/FavoritesList";

const FavoritesPage = () => {
  const { id } = useParams();
  return (
    <div>
      <FavoritesList />
    </div>
  );
};

export default FavoritesPage;
