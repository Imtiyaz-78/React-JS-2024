

import React, { Component } from 'react'

class ComponentDidUpdatee extends Component {
    constructor() {
        super();
        console.log(" 1st Constructor() method called ");
        this.state = {
            counter: 0
        }
    }

    componentDidUpdate(preProp, preState, snapshort) {
        console.log("3rd componentDidUpdate() method called ", preState.counter, this.state.counter)
        if(preState.counter === this.state.counter){
            alert("Data is already Same"); 
        }
    }

    render() {
        console.log("2nd render() method called");
        return (
            <div>
                <h1>Component Did update {this.state.counter}</h1>
                <button onClick={() => { this.setState({ counter:  1 }) }}>Update</button>
            </div>
        )
    }
}

export default ComponentDidUpdatee;

