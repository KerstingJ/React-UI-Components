import React from 'react';
import './Button.css';

class ActionButton extends React.Component {
    render(){
        return (
            <div 
                onClick={this.props.onClick} className={`btn actBtn ${this.props.size || ""}`}>{this.props.value}</div>
        );
    }
}

export default ActionButton;