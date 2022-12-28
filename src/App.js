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
import Checkout from './Pages/Checkout';
import { END_PRICE, START_PRICE, supportedBrand } from './Data/Data';
import ProductWithId from './Pages/ProductWithId';
import Order from './Pages/Order';
import CartCard from './Components/CartCard';
import ImageSlider from './Components/ImageSlider';

const initBrand=()=>{
  let arr=[];
  for(let i=0;i<supportedBrand.length;i++) arr.push({id:i,checked:true,label:supportedBrand[i] } );
  return arr;
}
function App() {
  const [isMod,setIsMod]=useState(false);
  const [isLogin,setIsLogin]=useState(true);
  const [isTempCart,setIsTempCart]=useState(false);

  const[tempCartProduct,setTempCartProduct]=useState(null);
  const[cartData,setCartData]=useState([]);

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
        tempCartProduct={tempCartProduct}
        setTempCartProduct={setTempCartProduct}
        cartData={cartData}
        setCartData={setCartData}
      />
      {/* <ImageSlider setImgIdx={setImgIdx} imgIdx={imgIdx}/> */}
        <Routes>
          <Route path='/' element={<Home/>} />

          <Route path='/cart' element={<Cart
            cartData={cartData}
            userData={userData}
          />} />
          <Route path='/profile' element={<Profile 
            userData={userData}
          />} />
          <Route path='/checkout' element={<Checkout
            userData={userData}
            cartData={cartData}
            isLogin={isLogin}
          />} />
          <Route path={'/order'} element={<Order
            userData={userData}
          />} />

          <Route path={'/order/:orderId'} element={<CartCard
            userData={userData}
            isOrder={true}
          />} />
          <Route path='/product' element={<Product
            filterData={filterData}
            setFilterData={setFilterData}
            searchText={searchText}
            setTempCartProduct={setTempCartProduct}
          />} />
          <Route path={'/product/:productId'} element={<ProductWithId
            setTempCartProduct={setTempCartProduct}
          />} />
        </Routes>
    </>
  );
}

export default App;

