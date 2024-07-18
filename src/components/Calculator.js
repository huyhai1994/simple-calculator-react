import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './component.css'

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
        return (<div className="container">
            <form className="bg-light p-5 rounded-3 calculator">
                <div className="mb-3">
                    <label htmlFor="inputNumber1">Number 1</label>
                    <input type="number" id="inputNumber1" className="form-control calculator__input-number"
                           onChange={e => this.setState({number1: parseInt(e.target.value)})}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputNumber2">Number2</label>
                    <input type="number" id="inputNumber2" className="form-control calculator__input-number"
                           onChange={e => this.setState({number2: parseInt(e.target.value)})}/>
                </div>
                <button type='button' className="btn btn-primary btn-outline-success text-white m-2"
                        onClick={this.add}>+
                </button>
                <button type='button' className="btn btn-primary btn-outline-success text-white m-2"
                        onClick={this.subtract}>-
                </button>
                <button type='button' className="btn btn-primary btn-outline-success text-white m-2"
                        onClick={this.multiply}>x
                </button>
                <button type='button' className="btn btn-primary btn-outline-success text-white m-2"
                        onClick={this.divide}>/
                </button>
                <h2>Result: {this.state.result !== undefined ? this.state.result : "Enter numbers and perform an operation"}</h2>
                {/*TODO:
                In the render method, you're using this.state.result without checking if it's defined. To fix this, you can initialize the result state with a default value or use conditional rendering to display a message when the result is not available:*/}
            </form>
        </div>);
    }
}

export default Calculator;
