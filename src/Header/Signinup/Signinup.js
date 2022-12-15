import { CgProfile } from 'react-icons/cg';
import React from "react";
const Signinup=({isMod,setIsMod,isLogin})=>{
    if(isLogin)return null
    return(
        <button className='sign1' onClick={()=>setIsMod(!isMod)}>
            <h1>Sign in</h1>
            <CgProfile size="18px"/>
        </button>
    )
}
export default Signinup