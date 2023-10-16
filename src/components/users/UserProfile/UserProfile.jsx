import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import FavoritesList from "../../favorites/FavoritesList";
import CardInvet from "../../cards/CardInvent/CardInvet";
import { getOneUser } from "../../../store/users/usersSlice";
import "./UserProfile.css";

const UserProfile = () => {
  //   const { id } = useParams();
  const { oneUser, loading, inventory } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneUser());
  }, []);

  return (
    <div className="UserProfileMain">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
        className="forWr"
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
                    backgroundColor: "white",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      border: "1px solid black",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginTop: "10%",
                    }}
                  >
                    <div
                      style={{
                        width: "300px",
                        height: "300px",
                        overflow: "hidden",
                        border: "3px solid black",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    >
                      <img
                        src={oneUser.image}
                        alt=""
                        width="100%"
                        height="100%"
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <p>{oneUser.name}</p>
                    <p>{oneUser.points} 両</p>
                    <p>{oneUser.level} уровень</p>
                  </div>
                  <>
                    <FavoritesList />
                  </>
                </div>

                <div
                  style={{
                    border: "1px solid black",
                    width: "60rem",
                  }}
                  className="UserProfileRight"
                >
                  <h2
                    style={{
                      textAlign: "center",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      color: "#ffac41",
                      marginTop: "5%",
                    }}
                    className="NameInv"
                  >
                    Инвентарь
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-around",
                      marginTop: "20px",
                    }}
                  >
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
    </div>
  );
};

export default UserProfile;
