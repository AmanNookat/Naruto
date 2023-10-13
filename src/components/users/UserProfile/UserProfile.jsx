import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import FavoritesList from "../../favorites/FavoritesList";
import CardInvet from "../../cards/CardInvent/CardInvet";
import { getOneUser } from "../../../store/users/usersSlice";

const UserProfile = () => {
  //   const { id } = useParams();
  const { oneUser, loading, inventory } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneUser());
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {oneUser && (
            <>
              <div
                style={{
                  width: "30rem",
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    border: "1px solid black",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={oneUser.image}
                    alt=""
                    width="300"
                    height="300"
                    style={{
                      border: "3px solid black",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <p>{oneUser.name}</p>
                  <p>{oneUser.points} 両</p>
                  <p>{oneUser.level} уровень</p>
                </div>
                <>
                  <FavoritesList />
                </>
              </div>

              <div style={{ border: "1px solid black", width: "60rem" }}>
                <h2 style={{ textAlign: "center" }}>Инвентарь</h2>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {inventory && (
                    <>
                      {inventory.map((card) => (
                        <CardInvet key={card.id} card={card} />
                      ))}
                    </>
                  )}
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default UserProfile;
