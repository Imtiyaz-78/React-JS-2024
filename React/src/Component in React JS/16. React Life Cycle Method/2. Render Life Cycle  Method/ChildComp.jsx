import React, { Component } from "react";

export default class ChildComp extends Component {
  constructor() {
    super();
    this.state = {
      email: "imtiyazmd803@gmail.com",
    };
  }
  render() {
    console.log("render() method called ", this.props);
    console.log("render() method called ", this.state.email);
    return (
        <>
        <h1>Child Component {this.props.name}</h1>
        <button onClick={()=> this.setState({email: "mozakkir@google.com"})}>Update Email</button>
        </>
    );
  }
}
