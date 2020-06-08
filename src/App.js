import React from "react";
import "./App.css";
import ComponentIncrement from "./components/ComponentIncrement";
import ComponentValue from "./components/ComponentValue";
import CountersWrapper from "./components/CountersWrapper";

function App() {
  return (
    <div>
      <CountersWrapper id={1} />
      <CountersWrapper id={2} />
      <CountersWrapper id={3} />
    </div>
  );
}

export default App;
