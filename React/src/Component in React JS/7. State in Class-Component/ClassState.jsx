import React, { Component } from "react";

class ClassState extends Component {
  constructor() {
    super();
    this.state = {
      Data: 1,
    };
  }

  Test = () => {
    this.setState({ Data: this.state.Data + 1 });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "70px" }}>
        <h1>{this.state.Data}</h1>
        <button onClick={() => this.Test()}>Update Data</button>
      </div>
    );
  }
}

export default ClassState;
