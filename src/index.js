import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const fname = 'karishma';
const lname = 'gajria Agarwal';

ReactDOM.render(
  
    <App />
  
  // <>
  //   <h1> CHALLENGE REACT #01</h1>
  //   {/* <p>My name is {fname} {lname}.I am a top react developer.</p> */}
  //   <p>My name is {`${fname} ${lname} `}.I am a top react developer.</p>
  //   <h2> Top series of netflix app</h2>
  //   <ol>
  //     <li>Dark</li>
  //     <li>k3g</li>
  //     <li>kaho na kaho</li>
  //     <li>SuperHero</li>
  //     <li>Devil</li>
  //   </ol>
  // </>
  
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
