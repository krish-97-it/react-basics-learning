import React from 'react';
// import logo from './logo.svg'; 
import './App.css';
import Header from './Custom_Components/Header.js'; //Custom Header Component
import Footer from './Custom_Components/Footer.js'; //Custom Footer Component

function App() {
    return (
        <>
        <Header title="myReact.com"/>
        <Footer/>
        </>
    );
}

export default App;
