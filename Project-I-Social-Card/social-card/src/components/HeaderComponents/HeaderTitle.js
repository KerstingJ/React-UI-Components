import React from 'react';
import './Header.css';

let date = new Date().toDateString("MMM DD");
const title = () => (<p><strong>Lambda School</strong> @lambdaSchool - {date}</p>);

export default title;