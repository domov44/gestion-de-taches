import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/private/Home';
import Connect from './pages/public/Connect';
import ProtectedRoutes from "./hooks/ProtectedRoutes";

import { UserProvider } from './hooks/UserContext';

export default function App() {
    return (
      <UserProvider>
          <Routes>
              <Route path="/" element={
                  <ProtectedRoutes>
                      <Home />
                  </ProtectedRoutes>
              } />
              <Route path="/connect" element={<Connect />} />
          </Routes>
      </UserProvider>
    );
}
