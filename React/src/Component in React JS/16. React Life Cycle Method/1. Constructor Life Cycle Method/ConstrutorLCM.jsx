import React, { Component } from "react";

export default class ConstrutorLCM extends React.Component {

  constructor(){
    console.log("First Load or call constrcutor");
    super();
    this.state = { Data: "Imtiyaz"}
  }


  render() {
    console.log("second load render method");
    return (
      <>
       <h1>Contructor Life Cycle Method {this.state.Data}</h1>
      </>
    );
  }
}
