import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './pages/private/Home';
import Connect from './pages/public/Connect';
import Profil from './pages/private/Profil';
import ProtectedRoutes from "./hooks/ProtectedRoutes";

export default function App() {
    return (
      <Routes>
          <Route path="/" element={
              <ProtectedRoutes>
                  <Home/>
              </ProtectedRoutes>
          }/>
          <Route path="/profil" element={
              <ProtectedRoutes>
                  <Profil/>
              </ProtectedRoutes>
          }/>
          <Route path="/connect" element={<Connect/>}/>
      </Routes>
    );
}

//TODO: recuperer les elements du user et les afficher en profil
//TODO: creer un user dans la db avec une requete?
//TODO: ajouter des choses a un user dans la db avec une requete?
