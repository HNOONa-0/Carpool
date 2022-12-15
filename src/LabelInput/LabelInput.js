import React, { useState } from 'react';
import './LabelInput.css';
const LabelInput=({labelText,inputType,name,value,onChange})=>{
    return(
        <div className='w100 pos-rel mb16'>
            <label className='label1 '>{labelText}</label>
            <input 
            type={inputType} id={name} name={name} onChange={onChange} 
            value={value}
            className='input1 fz16 pt8 pb8'></input>
        </div>
    )
}
export default LabelInput;