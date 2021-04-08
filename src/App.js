import "./App.css";
import data from "./components/data";
import { useState } from "react";
import Questions from "./components/Questions";

function App() {
  return (
    <div className="App">
      <Questions data={data} />
    </div>
  );
}

export default App;
