import React from "react";
import Student from "./Student";

class ComponentWillUnmountt extends React.Component {
    constructor() {
            super();
            this.state = {
            show: true,
            };
    }

    render() {
        return (
            <div>
                {this.state.show ? <Student /> : <h1>Child Component is removed</h1>}
                <button onClick={() => this.setState({ show: !this.state.show })}>Toogle Component </button>
            </div>
        );
    }
}

export default ComponentWillUnmountt;
