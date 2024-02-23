import React from "react";
import "./StyleInReact.css";
import style from "./custom.module.css"

const StyleInReact = () => {
  return (
      <div>
          <h1 className="first">First way to use style in React extrenal</h1>
          <h1 style={{backgroundColor:"magenta"}}>second way to use style inline</h1>
          <h1 className={style.third}>Third way to use style in React</h1>
      </div>
  );
};

export default StyleInReact;
