import React from "react";

function CVD(props) {
  const commons_french = require('../../translations/common_text_fr.json');
  const commons_english = require('../../translations/common_text_en.json');
  const userLang = props.language === 'fr';


  return (
    <div className="association association_cvd">
      <div className="association__content">
        <h2 className="content__title">CVD</h2>
        <p className="content__paragraph">
          { userLang ? commons_french.cvd.paragraph_text_1 : commons_english.cvd.paragraph_text_1 }
          <span className="content__paragraph-span_abbr">CVD </span>
          { userLang ? commons_french.cvd.paragraph_text_2 : commons_english.cvd.paragraph_text_2 }
        </p>
      </div>

      {/* <div className="content__gallery">
        <ul className="content__gallery_element">
          <li><img src={} alt='' className="content__gallery_item" /></li>
          <li><img src={} alt='' className="content__gallery_item" /></li>
          <li><img src={} alt='' className="content__gallery_item" /></li>
          <li><img src={} alt='' className="content__gallery_item" /></li>
          <li><img src={} alt='' className="content__gallery_item" /></li>
          <li><img src={} alt='' className="content__gallery_item" /></li>
        </ul>
      </div> */}
    </div>
  )
}

export default CVD;

/*
Village Committee for Development, CVD (Commité Villageois pour le Dévelopement) is the group that coordinates the development activities and projects of the village.
*/