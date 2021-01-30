
// import React from 'react';
// import ReactDOM  from 'react-dom';


// const App = () => {
//   //#challenge #02
//   const fname = 'karishma';
//   const lname = 'gajria Agarwal';
//   const cDate = `${new Date().getDate()} / ${new Date().getMonth()} / ${new Date().getFullYear()} `;

//  return (
//   <>
//     <h1>react challenge - #02</h1>
//     <h2>react developer - Er . {`${fname} ${lname}`}</h2>
//  <p>current date is {cDate}</p>
//   </>

//  )
// }

// export default App;


//#CHALLENGE#03 ====== FAILED BADLYYYY
/*import React from 'react';
import ReactDOM from 'react-dom';

//1 am to 12 pm - gm (green)
//12 pm  to 7pm  - good Afternoon (orange)
//7pm to 1 am - good night (black)
const App = () => {

  const greetingStyle = {
    display :  'border-box',
    backgroundColor : 'white',
    color : 'gray',
    margin : '10px 10px',
    padding : '10px 10px',
    border :  '2px solid lightgray',
    marginTop : '250px'
  }

  //CURRENT TIME
  // const ctime = new Date().getTime().toString();
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;

    //logic here

    return strTime;
  }
  
  //console.log(formatAMPM(new Date));

  //curren ttitme in hrs
  const ctime = new Date().getHours().toString();
  
  let greeting = '';
  let gcolor = '';
  const showgreeting = () => {
    if (ctime >=1 && ctime <= 11){
      // console.log('gm!');
      greeting = 'Good Morning';
      gcolor = 'green';
    } else if (ctime >=12 && ctime <= 19) {
      greeting = 'Good AfterNoon';
      gcolor = 'orange';

    } else {
      greeting = "good night ";
      gcolor = 'blue';

    }
    return greeting;
    return gcolor;
  }

  return(
    <>
      <div className = 'greeting-div'>
 
//           <h1 style = {greetingStyle}>hello guys ! <span style = {{color: `${gcolor} !important`}}>{showgreeting()}</span> </h1>
          
//           {/* <p> {formatAMPM(new Date)}</p> */
//           {/* <p> {ctime}</p> */}

//         {/* </div>  */}
//       </div>
//     </>
//   );
// }
// export default App;*/

//_____________________________________________________________________________
//##Challenge # completed successfully 😘
/*import React from 'react';
import ReactDOM  from 'react-dom';


const App = () => {

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



  return(
    <>
      <div className = 'container'> 
        <h1>challenge #03</h1>
        <div className = 'header_div'>
          <label>{formatAMPM(new Date)}</label>
        </div>
      </div>
      <div className = 'greeting_container'>
        <h2>Hello Guys! , <span style = {style}>{greeting}</span></h2>
      </div>
    </>
  );
}

export default App;*/

//_________________________________________________________________________________________________
//Challenge # 4 - dividing ythe abopve mini project into several components
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Header from './Header';
// import ShowGreeting from './ShowGreeting';
 

// const App =  () => {
//   return (
//     <>
//       {/*Header component */}
//       <Header/>  
//       <ShowGreeting/>    
//     </>
//   )
// }

// export default App;

//wow challenge completed successfully..... 
//CHALLENGE 5
//CREATE A calc ..
// import React from 'react';
// import ReactDOM from 'react-dom';
// import * as ops from './Calc';
// const App = () => {
//   return(
//     <>
//       <h1>calculator operations here..</h1>
//       <ul>
//         <li>sum is {ops.add(10,20)}</li>
//         <li>sub is {ops.sub(20,10)}</li>
//         <li>mul is {ops.mul(10,3)}</li>
//         <li>div is {ops.div(10,3)}</li>
//       </ul> 
//       <p>{ops.default}</p>     
//     </>
//   );
// }

// export default App;
//**************************************************************************** */
//Netflix app Clone
//**************************************************************************** */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Card from './NetflixAppClone/Card';
import Header from './Header';
import Sdata from './NetflixAppClone/Sdata';
import ShowDetailCard from './NetflixAppClone/ShowDetailCard';
import Hooks from './Hooks/Hooks';
import Hooks2 from './Hooks/Hooks2';
import DigitalClock from './Hooks/DigitalClock';
import Events from './Hooks/Events';
import Forms1 from './Hooks/Forms1';
import CCTracker from './APIproject_cryptocurrency/CCTracker';
 


const App = () => {

  //showing the series acc to their category
  // const SeriesAccToCategory = () => {
  //   return (
  //     Sdata.map((cval, inde)=>{
  //       console.log(cval);
  //       <h2 style = {{textAlign : 'center'}}>Thriller</h2>
  //       if (cval.title === 'thriller'){
  //         <div>
  //           <h2>cval.title</h2>
  //           <Card 
  //           key = {inde}
  //           imgsrc = {cval.imgsrc}
  //           sname = {cval.sname}
  //           title = {cval.title}
  //           link = {cval.link}/>
  //         </div>
  //       }
  //     })
  //   )
  // }

  return(
    <>
      <Header heading = 'react challenge - 05'/>
      <h1 style = {{textAlign :'center'}}>Netflix top series...</h1>
      <div className = "card_container">
        { Sdata.map((cVal , ind) => {
          // console.log(ind,cVal);
          return <Card 
            key = {ind}
            imgsrc = {cVal.imgsrc}
            sname = {cVal.sname}
            title = {cVal.title}
            link = {cVal.link}/>
        })}
      </div>
      <ShowDetailCard/>
      <hr/>
      <Hooks/>
      <hr/>
      <Hooks2/>
      <hr/>
      <DigitalClock/>
      <hr/>
      <Events/>
      <hr/>
      <Forms1/>
  </>
);
}
 
export default App;