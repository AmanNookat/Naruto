import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneUser } from "../../store/users/usersSlice";
import { toggleCardFavorite } from "../../store/users/usersActions";

const FavoritesList = () => {
  const { oneUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <div
      style={{ width: "100%", border: "1px solid black", textAlign: "center" }}
    >
      {oneUser && (
        <>
          {oneUser.favorites.length ? (
            <>
              <h2>Избранные</h2>
              {oneUser.favorites.map((card) => (
                <div key={card.id}>
                  <p>{card.name}</p>
                  <button
                    onClick={() => {
                      dispatch(toggleCardFavorite({ card }));
                    }}
                  >
                    убрать
                  </button>
                </div>
              ))}
            </>
          ) : (
            <h2>Избранных нет</h2>
          )}
        </>
      )}
    </div>
  );
};

export default FavoritesList;
