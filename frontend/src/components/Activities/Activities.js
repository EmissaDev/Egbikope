import React from "react";
import Gallery from "../Gallery/Gallery";

import './Activities.css'

function Activities(props) {
  const commons_french = require('../../translations/common_text_fr.json');
  const commons_english = require('../../translations/common_text_en.json');
  const userLang = props.language === 'fr';


  return (
    <section className="activities content__section">
      <div className="eblizan">
        <h3 className="content__title">Eblizan</h3>
        <p className='content__paragraph'>
          { userLang ? commons_french.activities.paragraph_text_1 : commons_english.activities.paragraph_text_1 } <span className="content__paragraph-span_name">Etézan </span>
          { userLang ? commons_french.activities.paragraph_text_2 : commons_english.activities.paragraph_text_2 } <span className="content__paragraph-span_name">Eblizan</span>.
        </p>
        <p className='content__paragraph'>
          { userLang ? commons_french.activities.paragraph_text_3 : commons_english.activities.paragraph_text_3 }
        </p>
      </div>

      <h2 className='content__title_second'>Gallery Eblizan</h2>
      <div className='content__gallery'>
        <ul className='content__gallery_element'>
          {
            <Gallery album={props.albumEblizan} name="azan" />
          }
        </ul>
      </div>

      <h2 className='content__title_second'>Gallery { userLang ? "Projets" : "Projects" }</h2>
      <div className='content__gallery'>
        <ul className='content__gallery_element'>
          {
            <Gallery album={props.albumProject} name="proj-com" />
          }
        </ul>
      </div>

      <h2 className='content__title_second'>Gallery Sports</h2>
      <div className='content__gallery'>
        <ul className='content__gallery_element'>
          {
            <Gallery album={props.albumSport} name="sport" />
          }
        </ul>
      </div>

    </section>
  )
}

export default Activities;

/*
We are in Togo where many communities hold cultural or traditional festivals such as Ayizan, Agbogbozan to name a few. In Egbikope, we also celebrate the harvest and
the hard work of our citizen every year. Maize/corn being the main staple in our village, our traditional festival formerly Etezan has been changed to Eblizan.
This festival, which often takes place in September, more precisely 2 weeks before the start of the school year, brings together all the inhabitants of the village
as well as its diaspora to celebrate the fruits of the harvest of the year. A tasting of dishes made from maize/corn followed by an auction of everything that is
grown on our land. It is also an opportunity to reward teachers of our local school for their hard work over the past academic year, and the best students in each
class receive a small reward as an encouragement. The festivities end with the final of a football (soccer) tournament which often begins a month before the date of
the celebration. Can participate in this tournament any teams from the surrounding villages that register. The winner of the final receives the cup and a financial
reward. All finalists also receive a reward.
*/