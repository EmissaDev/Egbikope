function KodzoGue(props) {
  const commons_french = require('../../translations/common_text_fr.json');
  const commons_english = require('../../translations/common_text_en.json');
  const userLang = props.language === 'fr';


  return (
    <div className="association">
      <div className="association__content">
        <h2 className="content__title">KodzoGue - ASKOG</h2>
        <p className="content__paragraph">
          <span className="content__paragraph-span_name">Egbikopé</span> { userLang ? commons_french.askog.paragraph_text_1 : commons_english.askog.paragraph_text_1 }
          <span className="content__paragraph-span_name">Tekpa Agbaglo </span> { userLang ? commons_french.askog.paragraph_text_2 : commons_english.askog.paragraph_text_2 }
          <span className="content__paragraph-span">Aflao Avoeme </span> { userLang ? commons_french.askog.paragraph_text_3 : commons_english.askog.paragraph_text_3 }
        </p>
        <p className="content__paragraph">
          { userLang ? commons_french.askog.paragraph_text_4 : commons_english.askog.paragraph_text_4 } <span className="content__paragraph-span_name">Kodzo-Gue Tekpa</span>,
          { userLang ? commons_french.askog.paragraph_text_5 : commons_english.askog.paragraph_text_5 } <span className="content__paragraph-span_abbr">ASKOG</span>.
          { userLang ? commons_french.askog.paragraph_text_6 : commons_english.askog.paragraph_text_6 } <span className="content__paragraph-span_name">Kodzo-Gue Tekpa</span>.
        </p>
      </div>
    </div>
  )
}

export default KodzoGue;

/*
Egbikopé is a village built by TEKPA AGBAGLO who came from Ghana in search of arable land. Having discovered this environment whose lands are rich and produce good
agricultural products, the first Tekpa moved from Aflao Avoeme (Ghana) with all his family to live on the land he has just bought. This is how the community first
started. One of his children, Kodzo-Gue Tekpa, was one of the people who fought for the development of the Egbikopé village. His vision was to make this small village
a place of contemplation where nations will come to visit and recharge their batteries in nature. To honor his memory and continue his mission, his children have
created an association bearing his name Association KODZO-GUE (ASKOG). Are members of this association, all descendants of the late Kodzo-Gue Tekpa.
*/