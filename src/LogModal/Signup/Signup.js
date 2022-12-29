import axios from 'axios';
import React, { useState } from 'react';
import { getUserByName } from '../../Api/userApi';
import LabelInput from '../../LabelInput/LabelInput';

const signupInputType=["text","password","text","date","text"];
const signupName=["email","password","name","birthdate","phone"];

const Signup=({isOn,setIsOn,setIsLogin,setUserData,setCartData,setIsMod} )=>{
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
    const handleOnSubmit=(e)=>{
        // register user if succesful log him in, else promp an error message saying
        const {email,password,name,birthdate,phone}=data
        axios.post('url whatever its',{
            email,password,name,birthdate,phone
        }).then(function (response) {
            // const {data}=response
            // console.log(data);
            // on succes,set user data,set cart data, set is login true,set is on to false,set is mod to false;
            setUserData([]);
            setCartData([]);
            setIsLogin(true);
            setIsOn(false);
            setIsMod(false);
          })
          .catch(function (error) {
            // handle error
            // on failure, cant set data, cant set login, cant set ison, cant set ismod
            // just display error message;
          })
          .then(function () {
            // always executed
          });
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
                    <button className='signin-button' onClick={handleOnSubmit}>SIGN UP</button>
                </div>
            </div>
    )
}
export default Signup;