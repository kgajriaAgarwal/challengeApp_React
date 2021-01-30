import React, { useState } from 'react';
import RactDOM from 'react-dom';

const Forms1 = () =>{
  const[details, setDetails] = useState({
    fname: '',
    lname: '',
    email: ''
  });
  
  const setTheName = (event) => {
    event.preventDefault();
    const ename = event.target.name;
    const evalue = event.target.value;

    // const{name, value} = event.target;

    setDetails((preValue)=> {
      return {
        ...preValue,
        [ename]: evalue
      }
    })

    // if(ename === 'fname'){
    //   setDetails((prevState)=>{
    //     return {
    //       firstname: evalue,
    //       lastname: prevState.lastname,
    //       email: prevState.email
    //     }
    //   })
    // }else if(ename === 'lname'){
    //   setDetails((prevState)=>{
    //     return {
    //       firstname: prevState.firstname,
    //       lastname: evalue,
    //       email: prevState.email
    //     }
    //   })
    // }else
    // {
    //   setDetails((prevState)=>{
    //     return {
    //         firstname: prevState.firstname,
    //         lastname: prevState.lastname,
    //         email: evalue
    //       }
    //     })
    // }
  }

  

  return(
    <>
      <h1>forms1 react challenge</h1>
      <h2>hello! {details.fname} {details.lname}</h2>
      <h4>{details.email}</h4>
      <form onSubmit = {setTheName}>
        <input type = 'text' placeholder = 'enter your Firstname' name = 'fname' onChange = {setTheName}></input>
        <br/>
        <input type = 'text' placeholder = 'enter your LastName' name = 'lname' onChange = {setTheName}></input>
        <br/>
        <input type = 'text' placeholder = 'enter your Email' name = 'email' onChange = {setTheName}></input>
        <br/>
        <button type = 'submit'>Submit</button>
      </form>
    </>
  );
}
export default Forms1;