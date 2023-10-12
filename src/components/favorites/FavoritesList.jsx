import React from "react";
import { useSelector } from "react-redux";

const FavoritesList = () => {
  const { oneUser } = useSelector((state) => state.users);

  return (
    <div>
      {oneUser && (
        <div>
          {oneUser.favorites.length ? (
            <div>
              {oneUser.favorites.map((card) => (
                <div key={card.id}>
                  <p>{card.name}</p>
                </div>
              ))}
            </div>
          ) : (
            <h2>Избранных нет</h2>
          )}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;
