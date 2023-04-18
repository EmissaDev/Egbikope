/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Routes, Route } from "react-router-dom";

import About from "../About/About";
import Accueil from "../Accueil/Accueil";
import Activities from "../Activities/Activities";
import Associations from "../Associations/Associations";
import CHEED from "../CHEED/CHEED";
// import Contact from "../Contact/Contact";
// import Impact from "../Impact/Impact";
import { NotFound } from "../NotFound/NotFound";

import '../Gallery/Gallery.css';
import './Main.css';


function Main(props) {
  return (
    <main className="content">
      <Routes>
        <Route path="/" element={
          <Accueil
            language={props.language}
            isFetching={props.isFetching}
            album={props.albumHome}
            getAlbumsTitleAndID={props.getAlbumsTitleAndID}
          /> }
        />
        <Route path="/about" element={
          <About
            language={props.language}
          /> }
        />
        <Route path="/activities" element={
          <Activities
            language={props.language}
            isFetching={props.isFetching}
            albumEblizan={props.albumEblizan}
            albumProject={props.albumProject}
            albumSport={props.albumSport}
            getAlbumsTitleAndID={props.getAlbumsTitleAndID}
          />}
        />
        <Route path="/cheed" element={
          <CHEED
            language={props.language}
            isFetching={props.isFetching}
            albumCheed17={props.albumCheed17}
            albumCheed19={props.albumCheed19}
            albumCheed20={props.albumCheed20}
            albumCheed22={props.albumCheed22}
            albumCheedDon={props.albumCheedDon}
            albumCheedArch={props.albumCheedArch}
            getAlbumsTitleAndID={props.getAlbumsTitleAndID}
          /> }
        />
        <Route path="/associations" element={
          <Associations
            language={props.language}
          /> }
        />
        {/* <Route path="impact" element={ <Impact /> } /> */}
        {/* <Route path="contact" element={ <Contact />} /> */}
        <Route path="*" element={ <NotFound language={props.language} /> } />
      </Routes>
    </main>
  )
}

export default Main;