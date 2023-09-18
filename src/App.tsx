import React, { useEffect, useRef } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import { useAuth } from './hooks/useAuth';

import Diogram from './components/Diogram';
import { data } from './mock/diogramData';
import BarChart from './components/BarChart';

const App = () => {
  const { isAuth } = useAuth();

  return (
    <>
      {isAuth ? (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/diogram"
            element={<Diogram data={data} showLegend={false} />}
          />
          <Route path="/barchart" element={<BarChart />} />
          <Route path="/*" element={<Register />} />
        </Routes>
      )}
    </>
  );
};

export default App;
