import React, { useEffect } from "react";
import ANED from "./ANED";
import CVD from "./CVD";
import KodzoGue from "./KodzoGue";

// import { mainApi } from "../../utils/MainApi";
import './Associations.css';

function Associations(props) {
  // function transformCard(cardItem) {
  //   return {
  //     alt: cardItem.name,
  //     title: cardItem.name,
  //     src: cardItem.link,
  //     id: cardItem._id,
  //     owner: cardItem.owner,
  //     likes: cardItem.likes
  //   }
  // }

  useEffect(() => {
    // mainApi.get
  })

  return (
    <section className="associations content__section">
      <CVD language={props.language} />
      <ANED language={props.language} />
      <KodzoGue language={props.language} />
    </section>
  )
}

export default Associations;