import React from 'react';
import ReactDOM from 'react-dom';
import Sdata from './Sdata';
import Card from './Card';

const FilteredData = (props) => {

  const h_style = {
    textAlign: 'center',
    backgroundColor: 'lightgray',
    color: 'darkorange',
    margin: '0',
    padding: '5px'
  }

  return(
    <>
      <h4 style = {h_style}>{props.category}</h4>
      <div className = "card_container">
        {Sdata.filter(data => data.title == `${props.category}`).map((fdata,ind) => (
          //setting the state of sat
          <Card 
            key = {ind}
            imgsrc = {fdata.imgsrc}
            sname = {fdata.sname}
            title = {fdata.title}
            link = {fdata.link}
          />
        ))}
      </div>
    </>
  );
}

export default FilteredData;