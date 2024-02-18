import React from "react";
import { ReactDOM } from "react";

const Student = (Props) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "magenta",
          color: "black",
          width: "40%",
          height: "240px",
          borderRadius: "12px",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
        }}
      >
        <h2>Props with functional Component</h2>
        <h2>Name: {Props.adress.name}</h2>
        <h2>Email: {Props.adress.Email}</h2>
        <h2>City: {Props.adress.city} </h2>
        <h2>Age: {Props.adress.age}</h2>
      </div>
    </>
  );
};

export default Student;
