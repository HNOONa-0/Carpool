import React, { useState } from 'react';
import LabelInput from '../../LabelInput/LabelInput';

const signupInputType=["text","password","text","date","text"];
const signupName=["email","password","name","birthdate","phone"];

const Signup=({isOn,setIsOn} )=>{
    if(!isOn)return null;
    const[data,setData]=useState({
        email:'',
        password:'',
        name:'',
        birthdate:'',
        phone:''
    })
    const handleChange=e=>{
        setData({...data, [e.target.name]: e.target.value} );
    }
    return(
        <div className='midxy modsz modsy border-curve pt64'>
            <div className='flex flex-col align-center pl32 pr32 w100'>
                <h2 className='fz24 bolder'>Create an account</h2>
                {signupInputType.map((en,i)=>{
                    return(
                        <LabelInput
                            key={i}
                            inputType={en}
                            labelText={signupName[i].charAt(0).toUpperCase()+signupName[i].slice(1) }
                            name={signupName[i] }
                            value={data[signupName[i] ] }
                            onChange={handleChange}
                        />
                    )
                })}
                <div className='flex justify-center w100 mb4'>
                    <h3 className='mr4'>Already have an account?</h3>
                    <h3 className='text-color-blue text-dash cursor-pointer' onClick={()=> setIsOn(!isOn) } >Sign In</h3>
                </div>
            </div>
                <div className='signin-button-div'>
                    <button className='signin-button'>SIGN UP</button>
                </div>
            </div>
    )
}
export default Signup;


{/* <Modal 
            open={isMod} 
            onClose={()=>setIsMod(false) }
        >
            <div className='midxy modsz modsy border-curve pt64'>
                <div className='flex flex-col align-center pl32 pr32 w100'>
                    <h2 className='fz24 bolder'>Create an account</h2>
                    <LabelInput
                        inputType={"text"}
                        labelText={"Email"}
                    />
                    <LabelInput
                        inputType={"password"}
                        labelText={"Password"}
                    />
                    <LabelInput
                        inputType={"text"}
                        labelText={"Name"}
                    />
                    <LabelInput
                        inputType={"text"}
                        labelText={"Phone number"}
                    />
                    <div className='flex justify-center w100 mb4'>
                        <h3 className='mr4'>Already have an account?</h3>
                        <h3 className='text-color-blue text-dash cursor-pointer'>Sign In</h3>
                    </div>
                </div>
                    <div className='signin-button-div'>
                        <button className='signin-button'>SIGN UP</button>
                    </div>
                </div>
        </Modal> */}