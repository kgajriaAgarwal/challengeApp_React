import Reacxt from 'react';
import ReactDOM from 'react-dom';
import pic from '../img/img.jpg';

const Card = (props) => { 
  return (
    <>
      <div className = 'card'>
        <img src = {props.imgsrc} alt = "img" className = "card_img"/>
        <div className = "card_info">
          <h3 className = "card_title">{props.sname}</h3> 
          <span className = "card_category">{props.title}</span>  
          <br/>
          <a href = {props.link} target = "_blank">
            <button >Watch now !</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;