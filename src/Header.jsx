import React from  'react';
import ReactDOM from 'react-dom';

const Header = (props) => { 
  //show current time in AM -Pm format on the header component
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

  return (
    <>
      <div className = 'container'> 
        <h1>{props.heading}</h1>
        <div className = 'header_div'>
          <label>{formatAMPM(new Date)}</label>
        </div>
      </div>
    </>
  )
}

export default Header;