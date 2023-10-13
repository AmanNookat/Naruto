import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneUser } from "../../store/users/usersSlice";
import { toggleCardFavorite } from "../../store/users/usersActions";

const FavoritesList = () => {
  const { oneUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <div>
      {oneUser && (
        <div>
          {oneUser.favorites.length ? (
            <div>
              {oneUser.favorites.map((card) => (
                <div key={card.id}>
                  <p>{card.name}</p>
                  <button
                    onClick={() => {
                      dispatch(toggleCardFavorite({ card }));
                    }}
                  >
                    Fav
                  </button>
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
