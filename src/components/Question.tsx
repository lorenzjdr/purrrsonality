import React from "react";
import { Question } from "../quizData";

interface QuestionProps {
  question: Question;
  onAnswer: (value: string) => void;
}

const QuestionComponent: React.FC<QuestionProps> = ({ question, onAnswer }) => {
  return (
    <div>
      <h2>{question.question}</h2>
      {question.options.map((option, index) => (
        <button key={index} onClick={() => onAnswer(option.value)}>
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default QuestionComponent;
