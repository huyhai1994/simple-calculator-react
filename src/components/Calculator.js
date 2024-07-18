import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './component.css'
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import PercentSharpIcon from '@mui/icons-material/PercentSharp';

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
            <form className="bg-light p-5 rounded-5 shadow shadow-lg calculator">
                <div className="mb-3">
                    <TextField required id="outlined-basic" className="form-control" label="Number 1" variant="outlined"
                               onChange={e => this.setState({number1: parseInt(e.target.value)})}/>
                </div>
                <div className="mb-3">
                    <TextField required id="outlined-basic" className="form-control" label="Number 2" variant="outlined"
                               onChange={e => this.setState({number2: parseInt(e.target.value)})}/>
                </div>
                <div className="mb-3 d-flex align-items-center
                justify-content-center">
                    <IconButton color="primary" onClick={this.add}><AddIcon/></IconButton>
                    <IconButton color="primary" onClick={this.subtract}><RemoveCircleOutlineIcon/>
                    </IconButton>
                    <IconButton color="primary" className="btn btn-primary btn-outline-success  m-2"
                                onClick={this.multiply}><CloseIcon/>
                    </IconButton>
                    <IconButton color="primary" className="btn btn-primary btn-outline-success  m-2"
                                onClick={this.divide}><PercentSharpIcon/>
                    </IconButton>
                </div>

                <h2>Result: {this.state.result !== undefined ? this.state.result : "Enter numbers and perform an operation"}</h2>
                {/*TODO:
                In the render method, you're using this.state.result without checking if it's defined. To fix this, you can initialize the result state with a default value or use conditional rendering to display a message when the result is not available:*/}
            </form>
        </div>);
    }
}

export default Calculator;
