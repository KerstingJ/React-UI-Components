import React from 'react';
import './Display.css';

const Display = props => {
    return <div className="display">{props.value || 0}</div>;
}

export default Display;