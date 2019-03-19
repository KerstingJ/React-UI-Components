import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay.js';
import NumBtn from './components/ButtonComponents/NumberButton.js';
import ActBtn from './components/ButtonComponents/ActionButton.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {"value": undefined, "first": undefined, "operator": undefined};
  }

  addToDisplay(event){
    let value = event.target.textContent;

    if (this.state.value === undefined || this.state.value === "0") {
      this.setState({"value": value});
    } else {
      this.setState({"value": this.state.value + value});
    }
  }

  clear(){
    this.setState({"value": undefined})
  }

  addEquation(event){
    let operator = event.target.textContent;
    this.setState({
      "first": parseInt(this.state.value), 
      "value": "0",
      "operator": operator,
    })
  }

  compute(){
    console.log(this.state);
    switch(this.state.operator){
      case "÷" :
        this.setState({"value": this.state.first / parseInt(this.state.value, 10)})
        break;
      case "x" :
        this.setState({"value": this.state.first * parseInt(this.state.value, 10)})
        break;
      case "-" :
        this.setState({"value": this.state.first - parseInt(this.state.value, 10)})
        break;
      case "+" :
        this.setState({"value": this.state.first + parseInt(this.state.value, 10)})
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="calc">
        <Display value={this.state.value}/>

        <div className="btnContainer">
          <div className="whiteBtns">
            <ActBtn onClick={this.clear.bind(this)} value="clear" size="bigBtn" />
            <div className="numContainer">
              {[1,2,3,4,5,6,7,8,9].map(num => <NumBtn onClick={this.addToDisplay.bind(this)} value={num} key={num}/>)}
            </div>
            <NumBtn onClick={this.addToDisplay.bind(this)} value="0" size="bigBtn" />
          </div>
          <div className="redBtns">
            <ActBtn onClick={this.addEquation.bind(this)} value="÷" />
            <ActBtn onClick={this.addEquation.bind(this)} value="x" />
            <ActBtn onClick={this.addEquation.bind(this)} value="-" />
            <ActBtn onClick={this.addEquation.bind(this)} value="+" />
            <ActBtn onClick={this.compute.bind(this)} value="=" />
          </div>
        </div>
      </div>
    );
  }
};

export default App;
