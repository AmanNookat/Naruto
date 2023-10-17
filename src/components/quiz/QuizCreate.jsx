import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createQuiz } from "../../store/quizzes/quizzesActions";

const QuizCreate = () => {
  const [quiz, setQuiz] = useState({
    name: "",
    image: "",
    questions: [],
  });
  const [oneQuestion, setOneQuestion] = useState({
    title: "",
    variants: [],
    correct: 0,
  });
  const [oneVariant, setOneVariant] = useState("");
  const dispatch = useDispatch();

  const addVariant = (variant) => {
    oneQuestion.variants.push(variant);
    setOneVariant("");
  };
  const addQuestion = (question) => {
    quiz.questions.push(question);
    setOneQuestion({ title: "", variants: [], correct: 0 });
  };

  return (
    <div style={{ backgroundColor: "white", padding: "100px" }}>
      <input
        type="text"
        value={quiz.name}
        onChange={(e) => {
          setQuiz({ ...quiz, name: e.target.value });
        }}
      />
      <input
        type="text"
        value={quiz.image}
        onChange={(e) => {
          setQuiz({ ...quiz, image: e.target.value });
        }}
      />
      <h1>add questions</h1>
      <input
        value={oneQuestion.title}
        type="text"
        onChange={(e) => {
          setOneQuestion({ ...oneQuestion, title: e.target.value });
        }}
      />
      <input
        type="text"
        value={oneVariant}
        onChange={(e) => setOneVariant(e.target.value)}
      />
      <button
        onClick={() => {
          addVariant(oneVariant);
        }}
      >
        Add variant
      </button>

      <select
        value={oneQuestion.correct}
        onChange={(e) => {
          setOneQuestion({ ...oneQuestion, correct: +e.target.value });
        }}
        name=""
        id=""
      >
        <option hidden>Правильный ответ</option>
        {oneQuestion.variants.map((variant, index) => (
          <option key={index} value={index}>
            {variant}
          </option>
        ))}
      </select>

      <button
        onClick={() => {
          addQuestion(oneQuestion);
        }}
      >
        AddQuestion
      </button>
      <button
        onClick={() => {
          dispatch(createQuiz({ quiz }));
        }}
      >
        Create Quiz
      </button>
    </div>
  );
};

export default QuizCreate;
