import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  //React bootstrap css
import './index.css'; //we can define custom css here.
import App from './App'; //Import App commponent (App.js)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);