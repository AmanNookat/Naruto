import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuizzes } from "../../store/quizzes/quizzesActions";
import QuizCard from "./QuizCard";
import style from "./Quizzes.module.css";

const QuizList = () => {
  const { quizzes, loading } = useSelector((state) => state.quizzes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuizzes());
  }, []);
  console.log(loading);

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className={style.quizList}>
          {quizzes.map((quiz) => (
            <QuizCard key={`quiz${quiz.id}`} quiz={quiz} />
          ))}
        </div>
      )}
    </>
  );
};

export default QuizList;
