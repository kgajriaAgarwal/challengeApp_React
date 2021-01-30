import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Hooks2 = () => {
  let Currenttime = new Date().toLocaleTimeString();
  const [time , setTime] = useState(Currenttime)

  //current timer in Am -Pm
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  const getTime = () => {
    let newCurrenttime = new Date().toLocaleTimeString();
    setTime(newCurrenttime);
  }

  return(
    <>
      <h1>challenge 2 on react hooks</h1>
      <label>{time}</label>   
      <br/>
      <button onClick= {getTime} >click me!!</button>  
    </>
  );
}

export default Hooks2;