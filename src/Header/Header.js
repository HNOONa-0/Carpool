import React, { useState } from "react";
import { BsCart4 } from 'react-icons/bs';
import { Link } from "react-router-dom";
import './Header.css'
import LinkMenu from "./LinkMenu/LinkMenu";
import Signinup from "./Signinup/Signinup";
import {MdCarRental} from 'react-icons/md';

const Header=({isLogin,setIsLogin,isMod,setIsMod,searchText,setSearchText})=>{
   return(
    <header className='header1'>
      <div className='nav1'>
      
        <div>
          <Link to='/'>
          {/* <Link to='/' className="logo text-decoration-none color-inherit"> */}
            {/* Carpool */}
            <MdCarRental size='32px'/>
          </Link>
        </div>

        <div className='searchdiv1'>
          <input 
            className='search1'
            autoFocus
            type='text'
            value={searchText}
            onChange={e=>{
              setSearchText(e.target.value)
            }}
            placeholder='What are you looking for?'>
          </input>
        </div>
          <div className='signcart1 overflow-hidden'> 
            <Signinup
              isMod={isMod}
              setIsMod={setIsMod}
              isLogin={isLogin}
            />
            <LinkMenu
              isLogin={isLogin}
              setIsLogin={setIsLogin}
            />
            <div>
              <Link to='/product' className="sign1 text-decoration-none color-inherit">
                  <h3>Products</h3>
              </Link>
            </div>
            <div>
              <Link to='/cart' className="sign1 text-decoration-none color-inherit">
                  <h3>Cart</h3>
                  <BsCart4 size="18px"/>
              </Link>
            </div>
          </div>
        </div>
      </header>
   ) 
}
export default Header;