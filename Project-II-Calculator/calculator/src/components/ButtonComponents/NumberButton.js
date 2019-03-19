import React from 'react';
import './Button.css';

class NumberButton extends React.Component {
     render(){
        return (
            <div onClick={this.props.onClick} className={`btn numBtn ${this.props.size || ""}`}>{this.props.value}</div>
        );
    }
}

export default NumberButton;