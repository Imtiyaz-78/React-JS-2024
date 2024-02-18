import React, { useState } from "react";
import ChildComp from "./ChildComp";

const RenderLCM = () => {
  const [name, setName] = useState("Imtiyaz");
  return (
    <>
      <ChildComp name={name}></ChildComp>
      <button onClick={() => setName("Mozakkir")}>Change Name</button>
    </>
  );
};

export default RenderLCM;
