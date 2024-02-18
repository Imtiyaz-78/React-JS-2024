import React from "react";
import ChildPropsClassComp from "./ChildPropsClassComp"

export default class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Mozakkir",
    };
  }

  render() {
    return (
      <div>
        <h1>Parent is calling Child</h1>
        <ChildPropsClassComp
          name={this.state.name}
          age={20}
          address={{ city: "DBG", pin: 786786 }}
        />
        <button onClick={() => this.setState({ name: "Imtiyaz" })}>
          Click me
        </button>
      </div>
    );
  }
}
