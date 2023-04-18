
function About(props) {
  const commons_french = require('../../translations/common_text_fr.json');
  const commons_english = require('../../translations/common_text_en.json');
  const userLang = props.language === "french";

  return (
    <section>
      <div className="about content__section">
        <div className="about__content">
          <h2 className="content__title">
            { userLang ? commons_french.about.title : commons_english.about.title }
          </h2>

          <img alt="egbi-pic" src="https://i.imgur.com/Tolnokz.jpg" className='content__image' />

          <p className="content__paragraph">
            {/* <img src={egbiPlak} alt='egbi-pic' className='content__image' /> */}
            { userLang ? commons_french.about.paragraph_text_1 : commons_english.about.paragraph_text_1}
            <span className="content__paragraph-span_name "> Egbikopé</span> { userLang ? commons_french.about.paragraph_text_2 : commons_english.about.paragraph_text_2 }.
            <span className="content__paragraph-span_name"> Egbikopé</span> { userLang ? commons_french.about.paragraph_text_3 : commons_english.about.paragraph_text_3 }.
          </p>
        </div>

        {/* <div className="fondation-koffi-gongo">
        </div> */}
      </div>
      <div className="histoire"></div>

      {/* <div className='elements content__gallery'>
        <ul className='elements__list'>
          {
            props.cards.map((card, id) =>
              <Card key={id} card={card} alt={card.alt} src={card.src} title={card.title} />
            )
          }
        </ul>
      </div> */}
    </section>

  )
}

export default About;

/*
<p className="content__paragraph">
Located in the Prefecture of Agou, about 100 km north of Lomé, Egbikopé is a small village built by its inhabitants. Egbikopé abounds with rich land suitable for
the production of several agricultural products.
</p>
*/