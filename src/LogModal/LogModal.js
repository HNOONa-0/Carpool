import { Modal } from '@mui/material';
import React, { useState } from 'react';
import SignIn from './Signin/Signin';
import Signup from './Signup/Signup';
import './LogModal.css';

const LogModal=({isMod,setIsMod,setIsLogin,setUserData,setCartData})=>{
    if(!isMod) return null;
    const[isOn,setIsOn]=useState(false);
    
    
    return(
        <Modal
            open={isMod} 
            onClose={()=>setIsMod(false) }
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {/* is on is for signup/sign in switching */}
            <div>
                <Signup 
                    isOn={isOn}
                    setIsOn={setIsOn}
                    setIsMod={setIsMod}

                    setIsLogin={setIsLogin}
                    setUserData={setUserData}
                    setCartData={setCartData}
                />
                <SignIn
                    isOn={isOn}
                    setIsOn={setIsOn}
                    setIsMod={setIsMod}

                    setIsLogin={setIsLogin}
                    setUserData={setUserData}
                    setCartData={setCartData}
                />
            </div>
        </Modal>
    )
}
export default LogModal;