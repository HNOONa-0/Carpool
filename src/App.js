import './App.css';

import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import LogModal from './LogModal/LogModal';
import { Route, Routes } from 'react-router-dom';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import TempCart from './TempCart/TempCart';
import Product from './Pages/Product/Product';
import Profile from './Pages/Profile';
import { END_PRICE, START_PRICE, supportedBrand } from './Data/Data';

const initBrand=()=>{
  let arr=[];
  for(let i=0;i<supportedBrand.length;i++) arr.push({id:i,checked:true,label:supportedBrand[i] } );
  return arr;
}
function App() {
  const [isMod,setIsMod]=useState(false);
  const [isLogin,setIsLogin]=useState(true);
  const [isTempCart,setIsTempCart]=useState(false);

  const[searchText,setSearchText]=useState('');
  const[filterData,setFilterData]=useState({
    brand:initBrand(),
    selectedPrice:[START_PRICE,END_PRICE],
    selectedRating:1
  })
  const[userData,setUserData]=useState(null)
  return (
    <>
      <Header
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        isMod={isMod}
        setIsMod={setIsMod}
        searchText={searchText}
        setSearchText={setSearchText}
        userData={userData}
        setUserData={setUserData}
      />
      <LogModal
        isMod={isMod}
        setIsMod={setIsMod}
      />
      <TempCart
        isTempCart={isTempCart}
        setIsTempCart={setIsTempCart}
        userData={userData}
      />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart
            userData={userData}
          />} />
          <Route path='/product' element={<Product
            filterData={filterData}
            setFilterData={setFilterData}
            searchText={searchText}
          />} />
          <Route path='/profile' element={<Profile 
            userData={userData}
          />} />
        </Routes>
    </>
  );
}

export default App;

