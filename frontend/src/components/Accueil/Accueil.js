import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

import Preloader from "../Preloader/Preloader";

import '../Carousel/Carousel.css';
import './Accueil.css'

function Accueil(props) {
  const commons_french = require('../../translations/common_text_fr.json');
  const commons_english = require('../../translations/common_text_en.json');
  const userLang = props.language === "french";

  return(
    <section className="accueil content__section">
      <div className="accueil__description">
        <p className="content__paragraph">
          { userLang ? commons_french.accueil.paragraph_text_1 : commons_english.accueil.paragraph_text_1 } <span className="content__paragraph-span_abbr"> CH2ED</span>,
          <span className="content__paragraph-span"> Centre d'Hébergement et d'Education des Enfants Démunis</span>
          { userLang ? commons_french.accueil.paragraph_text_2 : commons_english.accueil.paragraph_text_2 } <span className="content__paragraph-span_abbr">CH2ED</span>
          { userLang ? commons_french.accueil.paragraph_text_3 : commons_english.accueil.paragraph_text_3 }
        </p>
        <p className="content__paragraph">
        { userLang ? commons_french.accueil.paragraph_text_4 : commons_english.accueil.paragraph_text_4 } <span className="content__paragraph-span">Stade Omnisports KOFFI GONGO</span>.
        { userLang ? commons_french.accueil.paragraph_text_5 : commons_english.accueil.paragraph_text_5 } <span className="content__paragraph-span_name">Tekpa Koffi Gongo</span>
        { userLang ? commons_french.accueil.paragraph_text_6 : commons_english.accueil.paragraph_text_6 }
        </p>
      </div>
      {
        props.isFecthing ? <Preloader />
        : <Slider autoplay="1000">
          {
            props.album.map((item, index) =>
              <div
                key={index}
                style={{
                  background: `url('${item}') no-repeat center center`,
                  objectFit: `cover`,
                  /* gives a shadow to images to highlight where image has same color as its parent's background */
                  filter:
                    `drop-shadow(
                      1px 2px 8px hsl(200deg 50% 40% / 0.2)
                    )
                    drop-shadow(
                      2px 4px 16px hsl(200deg 50% 40% / 0.2)
                    )`
                }}
                // className="slider_image"
              />
            )
          }
        </Slider>
      }
    </section>
  )
}


export default Accueil;


/*
Welcome to Egbikope, the friendly and welcoming community next door
We are a small community that builds itself through the commitment and hard work of its people and its diaspora. It houses an orphanage called CH2ED (Centre d'Hébergement et d'Education des Enfants Démunis), Center for Housing and Education of Destitute Children. CH2ED’s mission is to give orphans and poor or abandoned children a chance to become active and responsible citizens of our country.
The village has a primary school with a nice football (Soccer) field called Stade Omnisports KOFFI GONGO. This stadium owes its name to the late Tekpa Koffi Gongo who was Fiato of our community and who did a lot for this small village to develop and become one of the largest autonomous cities in Togo.
*/