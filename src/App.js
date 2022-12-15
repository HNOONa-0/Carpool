import './App.css';

import React, { useState } from 'react';
import Header from './Header/Header';
import LogModal from './LogModal/LogModal';
import { Route, Routes } from 'react-router-dom';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
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
      {/* <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Dashboard
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Profile</MenuItem>
            <MenuItem onClick={popupState.close}>My account</MenuItem>
            <MenuItem onClick={popupState.close}>Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState> */}
    {/* <Menu id="link-menu" open>
      <MenuItem>a</MenuItem>
      <MenuItem>a</MenuItem>
      <MenuItem>a</MenuItem>
      <MenuItem>a</MenuItem>
    </Menu> */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='cart' element={<Cart/>} />
        </Routes>
    </>
  );
}

export default App;

