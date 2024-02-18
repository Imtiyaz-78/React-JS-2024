
import React from "react";

class Student extends React.Component {
    
    componentWillUnmount() {
        // alert("componentWillUnmount is called");
        console.log("componentWillUnmount() method is called");
    }

    render() {
        return (
        <h1 style={{color: "magenta", fontWeight: "bold", fontSize: "50px" }}>Student Component</h1>
        );
    }
}

export default Student;
