import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const DigitalClock = () => { 

  let ctime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(ctime);

  setInterval(()=>{
    let newCurrentTime = new Date().toLocaleTimeString();
    setTime(newCurrentTime);
  }, 1000)

  return(
    <>
      <h1>Digital clock recaty challenge</h1>
      <h1>{time}</h1>
    </>
  );
}

export default DigitalClock;