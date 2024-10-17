import React from "react";
import Quiz from "./components/Quiz";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="Meow">
      <h1>Purrrsonality Quiz</h1>
      <Quiz />
    </div>
  );
};

export default App;
