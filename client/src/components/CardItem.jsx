import React from 'react';
import { FiAlertTriangle } from "react-icons/fi";
import { BsFillCalendar2CheckFill } from "react-icons/bs";

// Styles
import * as styles from '../css/styles';

const CardItem = ({card}) => {
  const color = () => {
    if (card.status === 'URGENT') {
      return 'red';
    }
    if (card.bokad === 'JA' && card.betald === 'JA') {
      return 'green';
    } else {
      return 'orange';
    }
  }
  return (
    <article className={`CardItem ${styles.CardItem} ${color()}`}>
      {card.bokad === 'JA' ? <BsFillCalendar2CheckFill size={40} /> : null }
      <br/>
       <h2>{card.title.toUpperCase()}</h2>
      {card.status ? <FiAlertTriangle size={70} /> : null}
      <br/>
      <h3>Bokad: {card.bokad}</h3>
      <h3>Betald: {card.betald}</h3>
      <br/>
      { card.at ? 
        <div>
          <p>När ska jag göra det här?</p>
          <h1>{card.at}</h1>
        </div> : null }
      <br/>
      { card.address ? 
        <div>
          <p>Vart ska jag göra det här?</p>
          <h1>{card.address}</h1>
        </div> : null }
      <br/>
      <h2>Info:</h2>
      <p>{card.description}</p>
      <br/>
      <p>Länk:</p>
      <a href={card.link}>{card.linkDescription}</a>
    </article>
  );
};

export default CardItem;
