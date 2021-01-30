import React from 'react';
import ReactDOM from 'react-dom';

  var greet = "have a happy day 👍"

  function add(a,b){
    return a+b ;
  }

  function sub (a,b){
    return a-b ;
  }

  function mul(a,b){
    return a*b ;
  }

  function div(a,b){
    return (Math.round((a/b) * 100) / 100).toFixed(2) ;
  }

export default greet ;
export {add, sub, mul, div};