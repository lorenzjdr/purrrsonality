import React from "react";

interface ResultProps {
  answers: string[];
}

const Result: React.FC<ResultProps> = ({ answers }) => {
  const getResult = () => {
    const counts: { [key: string]: number } = {};

    answers.forEach((answer) => {
      counts[answer] = (counts[answer] || 0) + 1;
    });

    return Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    );
  };

  return (
    <div>
      <h2>Your Personality Type: {getResult()}</h2>
    </div>
  );
};

export default Result;
