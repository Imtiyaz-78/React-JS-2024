import { useState } from "react";

function State() {
  const [getData, setData] = useState("Imtiyaz ==>");

  function updatData() {
    setData("Imtiyaz is a Front End Developer");
  }

  console.log("<==========>");

  return (
    <div className="App">
      <h1>{getData}</h1>
      <button onClick={updatData}>Updte Data</button>
    </div>
  );
}

export default State;
