import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getOneQuiz } from "../../store/quizzes/quizzesActions";
import { savePoints } from "../../store/users/usersActions";
import {
  clearCorrets,
  clearQuizValues,
  onClickVariant,
} from "../../store/quizzes/quizzesSlice";

const OneQuiz = () => {
  const { loading, oneQuiz, question, step, corrects } = useSelector(
    (state) => state.quizzes
  );
  const [checkQuiz, setCheckQuiz] = useState(true);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneQuiz({ id }));
    if (oneQuiz) {
      if (oneQuiz.questions.length == step) {
        dispatch(savePoints(corrects));
        dispatch(clearQuizValues());
        setCheckQuiz(false);
      }
    }
  }, [step]);

  useEffect(() => {
    return () => {
      dispatch(clearCorrets());
    };
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {checkQuiz ? (
            <div>
              {question && (
                <div>
                  <span>
                    ВОПРОС: {step + 1}/{oneQuiz.questions.length}
                  </span>
                  <h3>{question.title}</h3>
                  {question.variants.map((text, index) => (
                    <li
                      onClick={() => dispatch(onClickVariant(index))}
                      key={index}
                      style={{
                        cursor: "pointer",
                        border: "1px solid black",
                        padding: "10px",
                      }}
                    >
                      {text}
                    </li>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <>
              <div>
                <div>
                  <div>
                    <p>ПОЗДРАВЛЯЮ!</p>
                    <img
                      src="https://lzd-img-global.slatic.net/g/p/0f9d5c2642593545dd59c7f69f6211e7.jpg_720x720q80.jpg"
                      alt=""
                      width="300"
                      height="auto"
                    />
                    <p>
                      Получено баллов: {corrects}/{oneQuiz.questions.length}
                    </p>
                    <Link to="/quizzes">ВЫЙТИ</Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default OneQuiz;
