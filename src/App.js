import React from 'react';
import './App.css';
import Home from './components/Home'
import Header from './layout/Header'
import Footer from './layout/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App-main">
        Hej från App.js
        <Home />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
