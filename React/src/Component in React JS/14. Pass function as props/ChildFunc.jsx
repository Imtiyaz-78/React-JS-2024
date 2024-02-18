import React from "react";

const ChildFunc = (props) => {
  console.log(props);
  return (
    <div className="flex justify-center items-center h-screen">
      <h1>Child Component</h1>
      <button
        onClick={() => props.data()}
        className="border-2 border-rose-500 bg-emerald-500 rounded-full ml-6"
      >
        call data function
      </button>
    </div>
  );
};

export default ChildFunc;
