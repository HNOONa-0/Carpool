import React, { useState } from 'react';
import './LabelInput.css';
const LabelInput=({labelText,inputType})=>{
    return(
        <div className='w100 pos-rel mb16'>
            <label className='label1 '>{labelText}</label>
            <input type={inputType} className='input1 fz16 pt8 pb8'></input>
        </div>
    )
}
export default LabelInput;