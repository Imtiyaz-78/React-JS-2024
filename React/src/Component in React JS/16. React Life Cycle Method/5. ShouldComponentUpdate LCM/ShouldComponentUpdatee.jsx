import React from 'react'

class ShouldComponentUpdatee extends React.Component {
    
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate() method called", this.state.counter)
        if (this.state.counter <= 5  ) {
            return true;
        }else{
            return false;
        }
    }
    

    render() {
        return (
            <div className="App">
                <h2> shouldComponentUpdate() method  {this.state.counter}</h2>
                <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>Update Counter</button>
            </div>
        );
    }
}

export default ShouldComponentUpdatee;