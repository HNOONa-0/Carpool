import { Modal } from '@mui/material';
import React, { useState } from 'react';
import SignIn from './Signin/Signin';
import Signup from './Signup/Signup';
import './LogModal.css';

const LogModal=({isMod,setIsMod})=>{
    if(!isMod) return null;
    const[isOn,setIsOn]=useState(false);
    
    
    return(
        <Modal
            open={isMod} 
            onClose={()=>setIsMod(false) }
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div>
                <Signup 
                    isOn={isOn}
                    setIsOn={setIsOn}
                />
                <SignIn
                    isOn={isOn}
                    setIsOn={setIsOn}
                />
            </div>
        </Modal>
    )
}
export default LogModal;