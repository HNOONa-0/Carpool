import './App.css';

import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import LogModal from './LogModal/LogModal';
import { Route, Routes } from 'react-router-dom';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import axios from 'axios';
import { Button, Card } from '@mui/material';
function App() {
  const [isMod,setIsMod]=useState(false);
  const [isLogin,setIsLogin]=useState(true);

  return (
    <>
      <Header
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        isMod={isMod}
        setIsMod={setIsMod}
      />
      <LogModal
        isMod={isMod}
        setIsMod={setIsMod}
      />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='cart' element={<Cart/>} />
        </Routes>
    </>
  );
}

export default App;

