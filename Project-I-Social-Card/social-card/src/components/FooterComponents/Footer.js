import React from 'react';
import './Footer.css';

const footer = () => {
    // .far is outline
    // .fas is solid
    return (
        <div className="footer">
            <i className="far fa-comment"></i>
            <i className="fas fa-sync-alt active"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-envelope"></i>
        </div>
    );
}

export default footer;