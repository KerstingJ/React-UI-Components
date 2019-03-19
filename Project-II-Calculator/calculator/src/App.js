import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay.js';
import NumBtn from './components/ButtonComponents/NumberButton.js';
import ActBtn from './components/ButtonComponents/ActionButton.js';

const App = () => {
  return (
    <div className="calc">
      <Display />
      <div className="btnContainer">
        <div className="whiteBtns">
          <ActBtn value="clear" size="bigBtn" />
          <div className="numContainer">
            {/* {[1,2,3,4,5,6,7,8,9].map(num => <NumBtn value={num} />)} */}
            {[1,2,3,4,5,6,7,8,9].map(num => <NumBtn value={num} key={num}/>)}
          </div>
          <NumBtn value="0" size="bigBtn" />
          
        </div>
        <div className="redBtns">
          <ActBtn value="/" />
          <ActBtn value="X" />
          <ActBtn value="-" />
          <ActBtn value="+" />
          <ActBtn value="=" />
        </div>
      </div>
    </div>
  );
};

export default App;
