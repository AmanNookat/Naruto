import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteCard, getOneCard } from "../../../store/cards/cardsActions";
import { clearOneCardState } from "../../../store/cards/cardsSlice";
import { checkAdmin } from "../../../helpers/functions";

const CardDetails = () => {
  const { loading, oneCard } = useSelector((state) => state.cards);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneCard({ id }));
    return () => dispatch(clearOneCardState());
  }, []);

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {oneCard && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>
                <img
                  src={oneCard.image}
                  alt={oneCard.name}
                  width="300"
                  height="auto"
                />
              </div>
              <div>
                <p>{oneCard.name}</p>
                <p>{oneCard.price}$</p>
                <p>{oneCard.power}</p>
                <p>{oneCard.rank}</p>
                <p>{oneCard.description}</p>
                {checkAdmin() && (
                  <div>
                    <button onClick={() => navigate(`/card-edit/${id}`)}>
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        dispatch(deleteCard({ id }));
                        navigate("/store");
                      }}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
              {/* {checkUserLogin() && <CommentCreate card={oneCard} />} */}

              {/* {oneCard.comments ? (
                <CommentList comments={oneCard.comments} />
              ) : (
                <h2>Комменты отсутсвуют</h2>
              )} */}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default CardDetails;
