import React from 'react';
import './App.css';
import Header from './components/HeaderComponents/HeaderContainer.js';
import Card from './components/CardComponents/CardContainer.js';
import Footer from './components/FooterComponents/Footer.js';

const App = () => {
  return (
    <div>
      <Header />
      <Card />
      <Footer />
    </div>
    );
};

export default App;
