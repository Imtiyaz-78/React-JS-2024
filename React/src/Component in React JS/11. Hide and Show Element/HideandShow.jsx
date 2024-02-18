import React from "react";
import './HideandShow.css';

const HideandShow = () => {
  const [status, setStatus] = React.useState(true);

  return (
    <>  
        <h1>Hide and Show</h1>
        <div className="container">
             { status ? <h1 className="text-4xl">Hello world</h1>:null}
            <button className="btn1 mt-10" onClick={() => setStatus(false)}>Hide</button>
            <button className="btn2 " onClick={() => setStatus(true)}> Show </button>
        

            {/* comments:- This is for Single Button Toggale Bar */}
            <button className="toglee ml-3" onClick={() => setStatus(!status)}>Toggle</button>
      </div>
    </>
  );
};

export default HideandShow;
