import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';

// just cause you can doesn't mean you should... but i did.
export default () => {
    return (
        <a href="https://www.reactjs.org"><div className="cardContainer">
            {CardBanner()}
            {CardContent()}
        </div></a>
    )
};