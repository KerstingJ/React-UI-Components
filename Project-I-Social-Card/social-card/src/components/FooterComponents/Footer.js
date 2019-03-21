import React from 'react';
import './Footer.css';

function counterFactory(){
    let count = 0;
    return {
        increment: function(){return ++count},
        decrement: function(){return --count}
    }
}

const commentCounter = counterFactory();
const syncCounter = counterFactory();
const emailCounter = counterFactory();
const mailCounter = counterFactory();

const click = (event) => {
    console.log(event.target);
    event.target.classList.toggle("far");
    event.target.classList.toggle("fas");
    event.target.classList.toggle("active");
}

const footer = () => {
    // .far is outline
    // .fas is solid
    return (
        <div className="footer">
            <i onClick={click} className="far fa-comment"></i>
            <i onClick={click} className="fas fa-sync-alt active"></i>
            <i onClick={click} className="far fa-heart"></i>
            <i onClick={click} className="far fa-envelope"></i>
        </div>
    );
}

export default footer;