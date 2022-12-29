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
import axios from 'axios';
import Admin from './Pages/Admin';

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
  useEffect(()=>{
    // const run=async()=>{
    //   getListUsers.then(function (response) {
    //     // handle success
    //     const {data}=response
    //     console.log(data);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .then(function () {
    //     // always executed
    //   });
    // }
    // run();
  })
  return (
    <>
      <Header
      // login logic
        isLogin={isLogin}
        setIsLogin={setIsLogin}
      // modal logic
        isMod={isMod}
        setIsMod={setIsMod}
      // search text
        searchText={searchText}
        setSearchText={setSearchText}
      // all user data
        userData={userData}
        setUserData={setUserData}
      />
      <LogModal
      // user click on sign in
        isMod={isMod}
        setIsMod={setIsMod}
        // incase a new user sign up, log him in and get his data
        // so set login to true, set user data aswell
        setIsLogin={setIsLogin}
        setUserData={setUserData} 
        // set cart data aswell,reassign it
        setCartData={setCartData}
      />
      <TempCart
      // temp cart product is valid when we click on add to cart
        tempCartProduct={tempCartProduct}
        setTempCartProduct={setTempCartProduct}
      // need existing cartData to compute sum&add the current product to cart if possible
      // if possible bec bought amount could exceed stock
        cartData={cartData}
        setCartData={setCartData}
      />
      {/* <ImageSlider setImgIdx={setImgIdx} imgIdx={imgIdx}/> */}
        <Routes>
          
          <Route path='/' element={<Home
          // give links for products that are displayed on homepage
          // set is cart to false;
          />} />

          <Route path='/cart' element={<Cart
            cartData={cartData}
            userData={userData}
          />} />
          <Route path='/profile' element={<Profile 
            userData={userData}
          />} />
          <Route path='/checkout' element={<Checkout
          // checkout need user data for credit info
          // need current products in the cart to compute sum and display them
          // user needs to be logged in first to checkout
            userData={userData}
            cartData={cartData}
            isLogin={isLogin}
          />} />
          <Route path={'/order'} element={<Order
            userData={userData}
          />} />
          <Route path={'/admin'} element={<Admin
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

