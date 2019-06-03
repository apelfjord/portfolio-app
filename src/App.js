import React from 'react';
import {Provider} from 'react-redux';
 
import store from './redux/store'
import './App.css';
import Home from './components/Home'
import Header from './layout/Header'
import Footer from './layout/Footer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <div className="App-main">
          Hej från App.js
          <Home />
        </div>
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
