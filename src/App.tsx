import React, { useState } from "react";
import Page from "./page"; 
import "./App.css";

const App: React.FC = () => {
  const [showPage, setShowPage] = useState(false);

  const handleStartButtonClick = () => {
    setShowPage(true);
  };

  return (
    <div className="Meow">
      {!showPage ? (
        <>
          <h1>Purrrsonality Quiz</h1>
          <button className="start-button" onClick={handleStartButtonClick}>
            Start Quiz
          </button>
        </>
      ) : (
        <Page />
      )}
    </div>
  );
};

export default App;
