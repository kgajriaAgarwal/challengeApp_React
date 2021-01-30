import React, { useState } from 'react';
import ReacxtDOM from 'react-dom';

const Hooks = () =>{

  //useState @topmost of functional componnets
  let [count, setCount] = useState(0);

  //function definiation
  function btnClick(){
    setCount(count += 1);
  }

  return(
    <>
    <h1>React Hooks #challenge #01</h1>
      <button onClick = {btnClick} >click Me!!</button>
      <br/>
      <label>count is {count}</label>
    </>
  );
}

export default Hooks;