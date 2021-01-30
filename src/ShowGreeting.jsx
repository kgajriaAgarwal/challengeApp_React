import React from 'react';
import ReactDOM from 'react-dom';

const ShowGreeting = () => {

  //Login part in js  - to show the greeting acc to the time
  //currnt time in hrs
  let chr = new Date().getHours();
  let greeting = "";
  const style = {
    color : 'black'
  }

  //logic to show the greeting
  if (chr>=1 && chr<12){
    greeting = "Good Morning 😃";
    style.color = 'green'
  }else if (chr>=12 && chr<=19){
    greeting = "Good AFTERNOON 🌤️";
    style.color = 'orange'
  }else{
    greeting = "Good Night 😘";
    style.color = 'blue'
  }

  return (
    <>
      <div className = 'greeting_container'>
        <h2>Hello Guys! , <span style = {style}>{greeting}</span></h2>
      </div>
    </>
  );
}
export default ShowGreeting;