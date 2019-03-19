import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <div className={`btn numBtn ${props.size}`}>{props.value}</div>
    );
}

export default NumberButton;