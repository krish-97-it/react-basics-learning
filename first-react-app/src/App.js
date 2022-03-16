import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Custom_Components/Header.js'; //Custom Header Component
import Footer from './Custom_Components/Footer.js'; //Custom Footer Component

function App() {
  return (
      <>
        <Header title="myReact.com"/>
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Hello! World
                </p>
                Welcome To Our First React App
            </header>
        </div>
        <Footer/>
    </>
  );
}

export default App;
