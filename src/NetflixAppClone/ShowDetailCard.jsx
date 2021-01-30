import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import FilteredData from './FilteredData';

const ShowDetailCard = () => { 

  const catObjArr = [
    {
      Cid:1,
      cname : 'thriller'
    },
    {
      Cid:1,
      cname : 'comedy'
    },
    {
      Cid:1,
      cname : 'Biography'
    }
  ]

return (
    <>
      <Header heading = 'category wise series'/>
      {/* <FilteredData category = 'thriller' />
      <FilteredData category = 'comedy' />
      <FilteredData category = 'Biography' /> */}
      {
        //map method 
        catObjArr.map(cval => {
         return  <FilteredData category = {cval.cname} />
        })
      }
    </>
  );
}

export default ShowDetailCard;

/*<div>
  //       {/* <h1 style = {{textAlign :'center'}}>category wise series</h1> */
  //       <div className = "card_container">
  //       { Sdata.map((cvalue , cind) => {
  //   if (cvalue.title == 'thriller'){
  //     console.log(cind,cvalue);
  
  //     // {setCat(()=>{'thriller'})}
  //     // console.log(`cateory is ${cat}`);
      
  //     // console.log(`cateory is ${cat}`);
  //     let elem = (Sdata.splice(cind, 1));
  //     // const thArr = (prevVal) => { 
  //     //   return [...prevVal , elem];
  //     // }
  //     {Sdata.filter(data => data.title == 'thriller').map(filtereddata => (
  //       <li>
  //         {filtereddata.sname};
  //       </li>
  //     ))}
  //     console.log(`thArr is: ${thArr}`);
  //     return (
  //       <Card 
  //       key = {cind}
  //       imgsrc = {cvalue.imgsrc}
  //       sname = {cvalue.sname}
  //       title = {cvalue.title}
  //       link = {cvalue.link}/>
  //     )
  //   }else if(cvalue.title == 'comedy'){
  //     // console.log(ind,cVal);
  //       // {setCat('thriller');}
  //       // console.log(`cateory is ${cat}`);
  //       console.log(Sdata.splice(cind, 1));
  //       const comArr = Sdata.splice(cind, 1);
  //       console.log(`comArr is: ${comArr}`);
  //       return (
  //         <Card 
  //         key = {cind}
  //         imgsrc = {cvalue.imgsrc}
  //         sname = {cvalue.sname}
  //         title = {cvalue.title}
  //         link = {cvalue.link}/>
  //       )
  //   }else{
  //       console.log('malum nahi kaun si category hai');
  //     }
  // })}
  //     </div> */