import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './pages/private/Home';
import Connect from './pages/public/Connect';
import Profil from './pages/private/Profil';
import Update_profil from './pages/private/Update_profil';
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
            <Route path="/update-profil" element={
                <ProtectedRoutes>
                    <Update_profil/>
                </ProtectedRoutes>
            }/>
          <Route path="/connect" element={<Connect/>}/>
      </Routes>
    );
}


