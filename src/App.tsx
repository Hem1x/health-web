import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import { useAuth } from './hooks/useAuth';
import Diagram from './components/Diagram';

const App = () => {
  const { isAuth } = useAuth();

  const data = [25, 25, 25, 25];
  const width = 200;
  const height = 200;

  return (
    <>
      {/* {isAuth ? (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<Register />} />
        </Routes>
      )} */}
      <Diagram data={data} width={width} height={height} />
    </>
  );
};

export default App;
