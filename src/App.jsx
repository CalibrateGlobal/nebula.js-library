import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import QlikSenseErrorPage from './pages/QlikSenseErrorPage';
import Chart from './pages/Chart';
import IconList from './pages/IconList';
import { GlobalStyle } from './globalStyles';
import { app1, app2 } from './data/chartList';
import useQlik from './utils/qlik/useQlik';

const App = () => {
  const { global, nebula } = useQlik(app1);
  const { nebula: nebula2 } = useQlik(app2);
  const [userDir, setUserDir] = useState("CC-EDAPPS");

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await global.getAuthenticatedUser({});
        setUserDir(user.split(';')[0].split('=')[1]);
      } catch (e) {
        setUserDir(e.message);
      }
    };
    if (global) {
      getUser();
    }
  }, [global]);

  const getSignedIn = () => {
    if (userDir === 'CC-EDAPPS') {
      return true;
    }
    return false;
  };

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Dashboard signedIn={getSignedIn()} />} />
        <Route
          path="/chart/:category/:chartId"
          element={
            <Chart nebula={nebula} nebula2={nebula2} signedIn={getSignedIn()} />
          }
        />
        <Route path="/iconlist" element={<IconList />} />
        <Route
          path="/error"
          element={<QlikSenseErrorPage signedIn={getSignedIn()} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
