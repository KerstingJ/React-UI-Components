import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay.js';
import NumBtn from './components/ButtonComponents/NumberButton.js';
import ActBtn from './components/ButtonComponents/ActionButton.js';
// NumBtn && ActBtn work the same just semantic differences

//could be refactored to parse string as equation with eval 
//  or an array of operands and operators with a recursive function
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {"value": undefined, "operand": undefined, "operator": undefined};
  }

  addToDisplay(event){
    let value = event.target.textContent;

    //displays input and outcome of equation
    if (this.state.value === undefined || this.state.value === "0") { // handles for leading 0's
      this.setState({"value": value});
    } else {
      this.setState({"value": this.state.value + value});
    }
  }

  clear(){
    // click once to clear the display, click a second time to clear memory
    if (this.state.value === undefined){
      this.setState({"operand": undefined, "operator": undefined})
    } else {
      this.setState({"value": undefined})
    }
  }

  addOperation(event){
    let operator = event.target.textContent;
    this.setState({
      "operand": this.state.operand || parseInt(this.state.value, 10), //handles double clicked operators
      "value": undefined,
      "operator": operator,
    })
  }

  compute(){
    console.log(this.state);
    switch(this.state.operator){
      case "÷" :
        this.setState({"value": this.state.operand / parseInt(this.state.value, 10)})
        break;
      case "x" :
        this.setState({"value": this.state.operand * parseInt(this.state.value, 10)})
        break;
      case "-" :
        this.setState({"value": this.state.operand - parseInt(this.state.value, 10)})
        break;
      case "+" :
        this.setState({"value": this.state.operand + parseInt(this.state.value, 10)})
        break;
      default:
        break;
    }
  }

  render(){
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
            <ActBtn onClick={this.addOperation.bind(this)} value="÷" />
            <ActBtn onClick={this.addOperation.bind(this)} value="x" />
            <ActBtn onClick={this.addOperation.bind(this)} value="-" />
            <ActBtn onClick={this.addOperation.bind(this)} value="+" />
            <ActBtn onClick={this.compute.bind(this)} value="=" />
          </div>

        </div>

      </div>
    );
  }
};

export default App;
