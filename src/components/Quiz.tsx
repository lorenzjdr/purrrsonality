import React, { useState } from "react";
import { quizData } from "../quizData";
import QuestionComponent from "./Question";
import Result from "./Result";

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswer = (value: string) => {
    setAnswers([...answers, value]);
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(-1); //show results
    }
  };

  return (
    <div>
      {currentQuestion === -1 ? (
        <Result answers={answers} />
      ) : (
        <QuestionComponent
          question={quizData[currentQuestion]}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default Quiz;
