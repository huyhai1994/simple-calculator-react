import {Component} from "react";

class Calculator extends Component {
    constructor(props) {
        /*TODO:
            The setState method is called inside the event handlers (add, subtract, multiply, divide) without initializing the component's state. To fix this, you need to initialize the state in the constructor:*/
        super(props);
        this.state = {
            number1: 0, number2: 0, result: 0
        };
    }

    add = () => {
        this.setState({result: this.state.number1 + this.state.number2});
    }
    subtract = () => {
        this.setState({result: this.state.number1 - this.state.number2});
    }
    multiply = () => {
        this.setState({result: this.state.number1 * this.state.number2});
    }
    divide = () => {
        if (this.state.number2 === 0) {
            alert("Cannot divide by zero");
            return;
        }
        this.setState({result: this.state.number1 / this.state.number2});
    }

    render() {
        return (<div>
            <input type="number" onChange={e => this.setState({number1: parseInt(e.target.value)})}/>
            <input type="number" onChange={e => this.setState({number2: parseInt(e.target.value)})}/>
            <button onClick={this.add}>+</button>
            <button onClick={this.subtract}>-</button>
            <button onClick={this.multiply}>*</button>
            <button onClick={this.divide}>/</button>
            <h2>Result: {this.state.result !== undefined ? this.state.result : "Enter numbers and perform an operation"}</h2>
            {/*TODO:
                In the render method, you're using this.state.result without checking if it's defined. To fix this, you can initialize the result state with a default value or use conditional rendering to display a message when the result is not available:*/}
        </div>);
    }
}

export default Calculator;
