import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <div className={`btn actBtn ${props.size}`}>{props.value}</div>
    );
}

export default ActionButton;