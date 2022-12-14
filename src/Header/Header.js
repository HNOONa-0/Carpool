import React, { useState } from "react";
import { BsCart,BsCart4 } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { AiFillCar} from 'react-icons/ai';
import './Header.css'

const Header=({isMod,setIsMod})=>{
   return(
    <header className='header1'>
      <div className='nav1'>
        <div>
          {/* <AiFillCar size="42px"/> */}
          <h2 className="logo">carpool</h2>
        </div>
        <div className='searchdiv1'>
          <input 
            className='search1'
            autoFocus
            type='text'
            placeholder='What are you looking for?'>
          </input>
        </div>
        <div className='signcart1'> 
            <button className='sign1' onClick={()=>{
              // console.log("sign in clicked")
              setIsMod(!isMod)
            }}>
                <h1>Sign in</h1>
                <CgProfile size="18px"/>
            </button>
            <button className='sign1' onClick={()=>console.log("cart clicked")}>
                <h1 >Cart</h1>
                <BsCart4 size="18px"/>
            </button>
          </div>
        </div>
      </header>
   ) 
}
export default Header;