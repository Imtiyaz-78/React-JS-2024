import React, { Component } from "react";

export default class ComponentDidMount extends Component {
    constructor() {
        super();
        this.state = { name: "Imtiyaz" };
        console.log("1st constructor called"); // pahle constructor call hota hai
    }

    componentDidMount() {
        console.log("3rd componentDidMount() method called"); // render method ke call hone ke baad componentDidMount call hota hai
    }

    render() {
        console.log("2nd render() called"); // constructor ke baad hamara render method call hota hai
        return (
        <div className="App">
            <h1>Component Did Mount {this.state.name}</h1>
            <button onClick={() => this.setState({ name: "Hey Imtiyaz" })}>Update Name</button>
        </div>
        );
    }
}
