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
    this.state = {"value": undefined, "operand": undefined, "operator": undefined, "misfire": false};
  }

  addToDisplay(event){
    let value = event.target.textContent;

    //updates state.value, the property that is sent to calculator to display
    if (this.state.value === "0" || isNaN(this.state.value)) { // handles for leading 0's
      this.setState({"value": value, "misfire": false});
    } else {
      this.setState({"value": this.state.value + value, "misfire": false});
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
    // if not a double clicked operator
    if (this.state.misfire === false){
      // sets operand to current value or the computed value of the current value and current operand
      let operator = event.target.textContent;
      let newOperand = undefined;

      if (isNaN(this.state.operand)){
        newOperand = parseInt(this.state.value, 10);
      } else {
        //this lets you chain equations, computed in the order they are entered
        newOperand = this.compute();
      }

      this.setState({
        "operand": newOperand,
        "value": "0",
        "operator": operator,
        "misfire": true,
      })
    }
  }
  
  compute(){
    let total = parseInt(this.state.value, 10);
    switch(this.state.operator){
      case "÷" :
        total = this.state.operand / parseInt(this.state.value, 10);
        break;
      case "x" :
        total = this.state.operand * parseInt(this.state.value, 10);
        break;
      case "-" :
        total = this.state.operand - parseInt(this.state.value, 10);
        break;
      case "+" :
        total = this.state.operand + parseInt(this.state.value, 10);
        break;
      default:
        break;
    }

    this.setState({"value": total, "operand": null, "operator": null})
    return total;
  }

  render(){
    return (
      <div className="calc">
        {/* display, btnContainer */}
        <Display value={this.state.value}/>

        <div className="btnContainer">
          {/* whiteBtns, redBtns */}
          <div className="whiteBtns">
            {/* ActBtn.clear, numContainer, NumBtn.zero */}
            <ActBtn onClick={this.clear.bind(this)} value="clear" size="bigBtn" />

            <div className="numContainer">
              {/* 1-9 # Btns */}
              {[1,2,3,4,5,6,7,8,9].map(num => <NumBtn onClick={this.addToDisplay.bind(this)} value={num} key={num}/>)}
            </div>

            <NumBtn onClick={this.addToDisplay.bind(this)} value="0" size="bigBtn" />
          </div>
            
          <div className="redBtns">
            {/* operator btns */}
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
