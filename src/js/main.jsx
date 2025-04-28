import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
// components
import Home from './components/Home';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
 
let seconds = 0;


setInterval(() => {
  root.render(
    <Home seconds={seconds} />
  );
  seconds++;
}, 1000);
