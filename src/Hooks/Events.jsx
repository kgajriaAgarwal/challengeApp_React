import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Events = () => {

  const [bg,setBg] = useState('blue');
  const[txt,setTxt] = useState('Karishma');
  const[clickedOnce, setClickedOnce] = useState(false);

  //function btnClickEvent
  const btnClickEvent = (event) =>{
    setBg('cyan');
    setTxt('gajria');
    setClickedOnce(true);
    // {(clickedOnce == true) ? 
    // setBg('green');
    // setTxt('gajria');}

    if (clickedOnce == true){
      setBg('green');
      setTxt('Agarwal');
    }else{
      console.log('kuch mat kar')
    }
    
  }

  return(
    <>
      <div className = 'eventmain_div' style = {{backgroundColor: bg}}>
      <button className = 'btn_Event' onClick = {btnClickEvent}>{txt}</button>
      </div>
    </>
  );
}

export default Events;