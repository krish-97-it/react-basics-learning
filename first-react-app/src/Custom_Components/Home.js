import React from 'react';
import logo from './Images/logo.svg';   
function Home() {
    return (
        <>
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Hello! World
                </p>
                Welcome To Our First React App
            </header>
        </div>
      </>
    );
  }
  export default Home;
 