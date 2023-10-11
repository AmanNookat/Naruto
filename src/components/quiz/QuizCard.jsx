import React from "react";
import { useNavigate } from "react-router-dom";

const QuizCard = ({ quiz }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/quizzes/${quiz.id}`);
      }}
    >
      <h3>{quiz.name}</h3>
      <p>Вопросов: {quiz.questions.length}</p>
      <img src={quiz.image} alt="" />
    </div>
  );
};

export default QuizCard;
