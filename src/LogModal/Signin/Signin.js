import { Modal } from '@mui/material';
import React, { useState } from 'react';
import LabelInput from '../../LabelInput/LabelInput';
const SignIn=({isOn,setIsOn})=>{
    if(isOn)return null;
    return(
        <div className='midxy modsz modsy border-curve pt64'>
            <div className='flex flex-col align-center pl32 pr32 w100'>
                <h3 className='fz18'>Welcome!</h3>
                <h2 className='fz24 bolder'>Sign in to your account</h2>
                
                <LabelInput
                    inputType={"text"}
                    labelText={"Email"}
                />
                <LabelInput
                    inputType={"password"}
                    labelText={"Password"}
                />
                <div className='flex justify-center w100 mb4'>
                    <h3 className='mr4'>Don't have an account?</h3>
                    <h3 className='text-color-blue text-dash cursor-pointer' onClick={()=> setIsOn(!isOn) }>Sign Up</h3>
                </div>
            </div>
                <div className='signin-button-div'>
                    <button className='signin-button'>SIGN IN</button>
                </div>
            </div>
    )
}
export default SignIn;
