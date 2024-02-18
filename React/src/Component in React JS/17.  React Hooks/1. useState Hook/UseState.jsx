import React, { useState } from 'react';
import "./UseState.css"

const UseState = () => {
    const [getName, setName] = useState("Mozakkir babu")
    const changeNameHandler = () =>{
        setName("Muhammad Imtiyaz");
        console.log('Name has been changed');
    }
    
    return (
        <>
            <h1>My Name is {getName}</h1> 
            <button onClick={changeNameHandler} className='button-3 '> Change  Name</button>
        </>
  )
}

export default UseState;
