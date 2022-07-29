import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Chart from './pages/Chart';
import IconList from './pages/IconList';
import { GlobalStyle } from './globalStyles';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/chart/:category/:chartId" element={<Chart />} />
        <Route path="/iconlist" element={<IconList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
