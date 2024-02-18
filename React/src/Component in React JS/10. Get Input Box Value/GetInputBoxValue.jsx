import React, { useState } from "react";

const GetInputBoxValue = () => {
  const [getData, setData] = useState("");
  const [printDat, setPrintData] = useState(false);

  const set = (val) => {
    setData(val.target.value);
    setPrintData(false)
  };

  return (
    <div>
        <h1>Get Input Box Value</h1>
        {printDat ? <h1>{getData}</h1> : null}
        <input type="text" placeholder="Type something..." onChange={set} />
        <button onClick={() => setPrintData(true)}>Submit</button>
    </div>
  );
};

export default GetInputBoxValue;
