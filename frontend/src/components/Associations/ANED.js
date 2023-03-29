function ANED(props) {
  const commons_french = require('../../translations/common_text_fr.json');
  const commons_english = require('../../translations/common_text_en.json');
  const userLang = props.language === 'fr';

  return (
    <div className="association association_aned">
      <div className="association__content">
        <h2 className="content__title">ANED</h2>
        <p className="content__paragraph">
          { userLang ? commons_french.aned.paragraph_text_1 : commons_english.aned.paragraph_text_1 } <span className="content__paragraph-span_abbr">ANED </span>
          { userLang ? commons_french.aned.paragraph_text_2 : commons_english.aned.paragraph_text_2 } <span className="content__paragraph-span_name">Egbikopé</span>.
        </p>
      </div>
    </div>
  )
}

export default ANED;

/*
L'association ANED est le regroupement de tous les natifs de notre communaté qui vivent dans une autre ville du pays pour des raisons de travail,
ou qui se trouvent dans la diapora. Nos rencontres mensuelles ont pour objectif de discuter des différents projets à mener pour le développement de notre chère
communauté, et les mesures à prendre pour faire régner la fraternité entre tous les ressortissants d'Egbikopé.
*/

/*
The ANED association is the organization of all the natives of our community who live in another city of the country for work reasons, or who are living abroad.
Our monthly meetings aim to discuss the various projects to be carried out for the development of our beloved community, and the measures to be taken to create
fraternity among all children of Egbikopé.
*/