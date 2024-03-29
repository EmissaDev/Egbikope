// import { I18nextProvider } from 'react-i18next';
// import i18next from 'i18next';
import React, { useEffect, useCallback, useState} from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
// import ImagePopup from "../Gallery/ImagePopup";

import dataApi from "../../utils/ImgurApi";
import * as auth from "../../utils/auth";

import './App.css';


function App() {
  // const location = useLocation();
  const [language, setLanguage] = useState("french");
  const [isFetching, setFetching] = React.useState(false);
  const [albumHome, setAlbumHome] = useState([]);
  const [albumCheed17, setAlbumCheed17] = React.useState([])
  const [albumCheed19, setAlbumCheed19] = React.useState([])
  const [albumCheed20, setAlbumCheed20] = React.useState([])
  const [albumCheed22, setAlbumCheed22] = React.useState([])
  const [albumCheedDon, setAlbumCheedDon] = React.useState([])
  const [albumCheedArch, setAlbumCheedArch] = React.useState([])
  const [albumEblizan, setAlbumEblizan] = React.useState([])
  const [albumProject, setAlbumProject] = React.useState([])
  const [albumSport, setAlbumSport] = React.useState([])

  // const [isImageExpand, setImageExpand] = useState(false);
  // const [selectedCard, setSelectedCard] = useState();


  function getAlbumsTitleAndID(data) {
    const result = new Map();
    const length = data[0].length

    // retireve albums ID and titles
    for (let i=0; i < length; i++) {
      const item = data[0]?.[i]
      result.set(item.id, item.link);
    }
    return result
  }

  const getAlbumImages = useCallback((albumHash) => {
    const result = Promise.all([
      dataApi.retrieveImages(albumHash)
        .then(res => res[1])
        .then((result) => {
          // console.log(result)
          return result
        })
        .catch(error => console.log('error', error))
    ])

    return result
  }, [])
  const getAlbums = useCallback(async (data) => {
    const images = getAlbumImages(data);
    const response = await images;
    const result = getAlbumsTitleAndID(response);
    const resultValues = [...result.values()];
    const valuesToArray = Array.from(resultValues);

    return valuesToArray;
  }, [getAlbumImages])

  // function handleCardClick(card) {
  //   setSelectedCard(card);
  //   setImageExpand(true);
  // }

  // function closeAllPopups() {
  //   setImageExpand(false)
  // }
  // function handlePopupClose(evt) {
  //   if(evt.target !== evt.currentTarget) return;
  //   closeAllPopups();
  // }

  useEffect(() => {
    const savedToken = localStorage.getItem("token")
    if (savedToken === null) {
      auth.authImgurAccess()
        .then(() => {
          setFetching(true);
        })
        .catch((err) => console.log(err));
    }
  }, [])

  useEffect(() => {
    // Load images per album from hosting service to the app
    Promise.all([ getAlbums('5Ra6Wma') ])
      .then(([carousel]) => setAlbumHome(carousel))

    Promise.all([
      getAlbums('wZxDLBy'), getAlbums('wHHU4TB'), getAlbums('eY6hXEu'),
      getAlbums('DoOtvfo'), getAlbums('7ukIK59'), getAlbums('jYtKVWE')
    ])
      .then(([ch17, ch19, ch20, ch22, don, arch]) => {
        setAlbumCheed17(ch17)
        setAlbumCheed19(ch19)
        setAlbumCheed20(ch20)
        setAlbumCheed22(ch22)
        setAlbumCheedDon(don)
        setAlbumCheedArch(arch)
      })

    Promise.all([
      getAlbums('A1uA5HC'), getAlbums('TRGQS0k'), getAlbums('fwlmICq')
    ])
      .then(([eblizan, project, sport]) => {
        setAlbumEblizan(eblizan);
        setAlbumProject(project);
        setAlbumSport(sport);
      })

    setFetching(false);
  }, [getAlbums])

  return (
    <div className="app_content">
      <Header
        language={language}
        handleSetLanguage={(lang) => {
          setLanguage(lang);
          // localStorage.setItem("language", lang)
        }}
      />
      <Main
        language={language}
        isFetching={isFetching}
        albumHome={albumHome}
        albumCheed17={albumCheed17}
        albumCheed19={albumCheed19}
        albumCheed20={albumCheed20}
        albumCheed22={albumCheed22}
        albumCheedDon={albumCheedDon}
        albumCheedArch={albumCheedArch}
        albumEblizan={albumEblizan}
        albumProject={albumProject}
        albumSport={albumSport}
        getAlbumsTitleAndID={getAlbumsTitleAndID}
        // handleCardClick={handleCardClick}
      />
      {/* <ImagePopup src={selectedCard} isOpen={isImageExpand} onClose={handlePopupClose} /> */}
      <Footer />
    </div>
  );
}


export default App;