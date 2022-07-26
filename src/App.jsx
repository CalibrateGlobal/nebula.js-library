import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import QlikSenseErrorPage from './pages/QlikSenseErrorPage';
import Chart from './pages/Chart';
import ChartButton from './pages/ChartButton';
import { app1, app2 } from './data/chartList';
import useQlik from './utils/qlik/useQlik';

const App = () => {
  const { global, nebula } = useQlik(app1);
  const { nebula: nebula2 } = useQlik(app2);
  const [userDir, setUserDir] = useState('CC-EDAPPS');

  // Test the connection with the node server (temp)

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => console.log(data.message))
  }, []);

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
    <Routes>
      <Route path="/" element={<Dashboard signedIn={getSignedIn()} />} />
      <Route
        path="/chart/:category/:chartId"
        element={
          <Chart nebula={nebula} nebula2={nebula2} signedIn={getSignedIn()} />
        }
      />
      <Route
        path="/chart/button"
        element={
          <ChartButton nebula={nebula} nebula2={nebula2} signedIn={getSignedIn()} />
        }
      />
      <Route
        path="/error"
        element={<QlikSenseErrorPage signedIn={getSignedIn()} />}
      />
    </Routes>
  );
};

export default App;
