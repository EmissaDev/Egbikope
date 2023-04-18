import React from 'react';
import Logo from '../Logo/Logo';
import NavList from "../NavList/NavList";

import './Header.css';

function Header(props) {
  const commons_french = require('../../translations/common_text_fr.json');
  const commons_english = require('../../translations/common_text_en.json');
  const userLang = props.language;


  return (
    <header
      className="header"
    >
      <select
        value={userLang}
        onChange={e => props.handleSetLanguage(e.target.value)}
        className="header__language"
      >
        {/* { props.language === "french"
          ? <option value="french">FR</option>
          : <option value="english">EN</option>
        } */}
        <option value="french">FR</option>
        <option value="english">EN</option>
      </select>
      <div className="header__menus">
        <Logo alt="header" />
        <NavList language={props.language} />
      </div>
      <h1 className='header__text'>
        { userLang === "french"
          ? commons_french.header.main_text
          : commons_english.header.main_text
        }
        {/* Bienvenue à Egbikope, la communauté amicale et accueillante d'à côté */}
      </h1>
    </header>
  )
  // Welcome to Egbikope, the friendly and welcoming community next door
}

export default Header;

/*
Welcome to Egbikope, the friendly and welcoming community next door
We are a small community that builds itself through the commitment and hard work of its people and its diaspora. It houses an orphanage called CH2ED (Centre d'Hébergement et d'Education des Enfants Démunis), Center for Housing and Education of Destitute Children. CH2ED’s mission is to give orphans and poor or abandoned children a chance to become active and responsible citizens of our country.
The village has a primary school with a nice football (Soccer) field called Stade Omnisports KOFFI GONGO. This stadium owes its name to the late Tekpa Koffi Gongo who was Fiato of our community and who did a lot for this small village to develop and become one of the largest autonomous cities in Togo.

*/