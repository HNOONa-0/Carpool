import React, { useState } from 'react';
import LabelInput from '../../LabelInput/LabelInput';

const signinInputType=["text","password"];
const signinName=["email","password"];


const SignIn=({isOn,setIsOn})=>{
    if(isOn)return null;
    const[data,setData]=useState({
        email:'',
        password:''
    })
    const handleChange=e=>{
        setData({...data, [e.target.name]: e.target.value} );
    }
    return(
        <div className='midxy modsz modsy border-curve pt64'>
            <div className='flex flex-col align-center pl32 pr32 w100'>
                <h3 className='fz18'>Welcome!</h3>
                <h2 className='fz24 bolder'>Sign in to your account</h2>
                {signinInputType.map((en,i)=>{
                    return(
                        <LabelInput
                            key={i}
                            inputType={en}
                            labelText={signinName[i].charAt(0).toUpperCase()+signinName[i].slice(1) }
                            name={signinName[i] }
                            value={data[signinName[i] ] }
                            onChange={handleChange}
                        />
                    )
                })}
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
