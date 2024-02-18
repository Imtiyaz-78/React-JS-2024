import React, { Component } from "react";

export default class ChildPropsClassComp extends React.Component {
    
  render() {
    console.log(this.props.address.city);
    return (
      <>
        <div style={{ backgroundColor: "skyblue", borderRadius: 10, width: "500px", height:"200px"}}>
          <h1> Hello {this.props.name} </h1>
          <h2> {this.props.Email} </h2>
          <h2>City: {this.props.address.city}</h2>
          <h2>Pincode: {this.props.address.pin}</h2>
        </div>
      </>
    );
  }
}
