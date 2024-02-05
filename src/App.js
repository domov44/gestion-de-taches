import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/private/Home';
import Connect from './pages/public/Connect';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/connect" element={<Connect />} />
    </Routes>
  );
}
