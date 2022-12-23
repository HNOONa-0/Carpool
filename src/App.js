import './App.css';

import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import LogModal from './LogModal/LogModal';
import { Route, Routes } from 'react-router-dom';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import axios from 'axios';
import { Button, Card } from '@mui/material';
import TempCart from './TempCart/TempCart';
import Product from './Pages/Product/Product';
function App() {
  const [isMod,setIsMod]=useState(false);
  const [isLogin,setIsLogin]=useState(true);
  const [isTempCart,setIsTempCart]=useState(false);
  const [searchText,setSearchText]=useState('')
  return (
    <>
      <Header
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        isMod={isMod}
        setIsMod={setIsMod}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <LogModal
        isMod={isMod}
        setIsMod={setIsMod}
      />
      <TempCart
        isTempCart={isTempCart}
        setIsTempCart={setIsTempCart}
      />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/product' element={<Product/>} />
        </Routes>
    </>
  );
}

export default App;

