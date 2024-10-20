import React from "react";
import bombay from "../images/bombay.png";
import calico from "../images/calico.png";
import bsh from "../images/bsh.png";
import ragdoll from "../images/ragdoll.png";

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

  const result = getResult();


  const images: { [key: string]: string } = {
    bombay: bombay,
    calico: calico,
    bsh: bsh,
    ragdoll: ragdoll,
  };

  const imageSrc = images[result];

  return (
    <img src={imageSrc} alt={result} style={{ maxWidth: "90%", height: "90%" }} />
  );
};

export default Result;
