import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuizzes } from "../../store/quizzes/quizzesActions";
import QuizCard from "./QuizCard";

const QuizList = () => {
  const { quizzes, loading } = useSelector((state) => state.quizzes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuizzes());
  }, []);

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          {quizzes.map((quiz) => (
            <QuizCard key={`quiz${quiz.id}`} quiz={quiz} />
          ))}
        </div>
      )}
    </>
  );
};

export default QuizList;
