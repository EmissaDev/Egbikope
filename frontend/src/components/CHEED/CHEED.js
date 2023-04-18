import React from "react";
import Gallery from "../Gallery/Gallery";

import './CHEED.css';


function CHEED(props) {
  const [gallery, setGalleryName] = React.useState("Photo");
  const [displayGallery, setGalleryDisplay] = React.useState(false);
  const commons_french = require('../../translations/common_text_fr.json');
  const commons_english = require('../../translations/common_text_en.json');
  const userLang = props.language === "french";

  function handleCardClick(name) {
    setGalleryDisplay(true);
    setGalleryName(name);
  }

  return (
    <section className='centre content__section'>
      <div className='centre__accueil'>
        <img src="https://i.imgur.com/jiYbSKt.png" alt='centre-plak' className='content__image' />

        <p className='content__paragraph'>
          { userLang ? commons_french.cheed.paragraph_text_1 : commons_english.cheed.paragraph_text_1 } <span className="content__paragraph-span">Centre d'Hébergement et d'Education des Enfants Démunis </span>
          { userLang ? commons_french.cheed.paragraph_text_2 : commons_english.cheed.paragraph_text_2 } <span className="content__paragraph-span_abbr">CH2ED</span>
          { userLang ? commons_french.cheed.paragraph_text_3 : commons_english.cheed.paragraph_text_3 }
          <span className="content__paragraph-span_abbr">CH2ED</span> { userLang ? commons_french.cheed.paragraph_text_4 : commons_english.cheed.paragraph_text_4 }
          <span className="content__paragraph-span_abbr">CH2ED</span> { userLang ? commons_french.cheed.paragraph_text_5 : commons_english.cheed.paragraph_text_5 }
          <i>{ userLang ? commons_french.cheed.paragraph_text_6 : commons_english.cheed.paragraph_text_6 }</i>
        </p>
      </div>

      <div className='gallery__photos'>
        {
          (!displayGallery && <h3 className='content__title'>Gallery</h3>)
        }

        <ul className='cards'>
          <li className='cards__item' onClick={() => handleCardClick("2017") }>
            2017
            <img src={props.albumCheed17[3]} alt='cover-2017' className='cards__photo' />
          </li>
          <li className='cards__item' onClick={() => handleCardClick("2019") }>
            2019
            <img src={props.albumCheed19[4]} alt='cover-2019' className='cards__photo' />
          </li>
          <li className='cards__item' onClick={() => handleCardClick("2020") }>
            2020
            <img src={props.albumCheed20[1]} alt='cover-2020' className='cards__photo' />
          </li>
          <li className='cards__item' onClick={() => handleCardClick("2022") }>
            2022
            <img src={props.albumCheed22[1]} alt='cover-2022' className='cards__photo' />
          </li>
          <li className='cards__item' onClick={() => handleCardClick("Archive") }>
            Archive
            <img src={props.albumCheedArch[1]} alt='cover-arch' className='cards__photo' />
          </li>
          <li className='cards__item'onClick={() => handleCardClick("Donations") }>
            Donations
            <img src={props.albumCheedDon[4]} alt='cover-don' className='cards__photo' />
          </li>
        </ul>

        {
          displayGallery ? <h2 className='content__title_second'>Gallery - {gallery}</h2> : null
        }

        {
          (gallery === "2017") && displayGallery
          ? <Gallery album={props.albumCheed17} name="ch2017" />
          : null
        }

        {
          (gallery === "2019") && displayGallery
          ? <Gallery album={props.albumCheed19} name="ch2019" />
          : null
        }

        {
          (gallery === "2020") && displayGallery
          ? <Gallery album={props.albumCheed20} name="ch2020" />
          : null
        }

        {
          (gallery === "2022") && displayGallery
          ? <Gallery album={props.albumCheed22} name="ch2022" />
          : null
        }

        {
          (gallery === "Archive") && displayGallery
          ? <Gallery album={props.albumCheedArch} name="ch-arch" />
          : null
        }

        {
          (gallery === "Donations") && displayGallery
          ? <Gallery album={props.albumCheedDon} name="ch-don" />
          : null
        }

      </div>

      <div className="centre__contact">
        <p className='content__paragraph'>
          { userLang ? commons_french.cheed.paragraph_text_7 : commons_english.cheed.paragraph_text_7 }
          <br /><b>{ userLang ? commons_french.cheed.paragraph_text_8 : commons_english.cheed.paragraph_text_8 }</b>
          <br /><span className='content__contact'><span className="content__contact_name">Fiato Komi Tekpa</span> - Tel: (00228) 90 04 71 16</span>
          <br /><span className='content__contact'><span className="content__contact_name">Mama Kediasso II</span> - Tel: (00228) 90 20 04 54</span>
          <br /><span className='content__contact'><span className="content__contact_name">Agbota Kokou Agbigbi</span> - Tel: (00228) 90 17 69 27</span>
        </p>
      </div>

      {/* <div className="centre__projet">
        insert pdf view of the project here
      </div> */}
    </section>
  )
}

export default CHEED;

/*
Bienvenue au Centre d'Hébergement et d'Education des Enfants Démunis dénommé CH2ED. Comme l'explique notre acronyme, nous hébergeons les enfants délaissés dans
les rues, les enfants sans famille et ceux dont les parents ou tuteurs ne parviennent pas à éduquer faute de moyens financiers. Le CH2ED a pour mission de redonner
espoir à tout enfant l'ayant perdu suite à une quelconque situation de la vie. Que l'enfant soit orphelin ou démuni, c'est-à- dire, ses parents ne peuvent plus
subvenir à son éducation, nos portes sont ouvertes pour l'accueillir.
Le CH2ED a été créé en 2001 et officiellement reconnu en 2005. Il abrite actuellement en internat: 23 garçons et 21 filles, soit 44 enfants âgés de 5 à 13 ans.
Pour avoir plus de détails sur nos activités et comment nous venir en aide, nous vous prions de nous contacter à:
Coordinateurs:
Fiato Komi Tekpa – Tel: (00228) 90 04 71 16
Mama Kediasso II – Tel: (00228) 90 20 04 54
Agbota Kokou Agbigbi – Tel: (00228) 90 17 69 27
*/

/*
Welcome to the Center for Housing and Education of Destitute Children called CH2ED (Centre d'Hébergement et d'Education des Enfants Démunis). As our acronym explains,
we house children abandoned on the streets, children without families as well as those whose parents or guardians are unable to educate them for lack of financial
means. The CH2ED's mission is to restore hope to any child who has lost it following any life situation. Whether the child is an orphan or destitute, that is to say,
his parents can no longer provide for his education, our doors are open to welcome him.
The CH2ED was created in 2001 and legally certified in 2005. It currently houses 23 boys and 21 girls, i.e. 44 children aged 5 to 13 years.
For more details on our activities and how to help us, please contact us at:
Coordinators:
Fiato Komi Tekpa – Tel: (00228) 90 04 71 16
Mama Kediasso II – Tel: (00228) 90 20 04 54
Agbota Kokou Agbigbi – Tel: (00228) 90 17 69 27

*/