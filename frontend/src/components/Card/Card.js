import React from 'react';

import './Card.css';

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card)
  }

  return(
    <li className='element__item'>
      <img className='content__gallery_item' src={props.src} alt={props.alt} onClick={handleClick} />
    </li>
  )
}

export default Card;