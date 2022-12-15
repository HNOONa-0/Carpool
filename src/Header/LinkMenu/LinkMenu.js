import { CgProfile } from 'react-icons/cg';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import React, { useState } from "react";
import { Menu, MenuList,MenuItem } from '@mui/material';

const LinkMenu=({isLogin,setIsLogin})=>{
    if(!isLogin)return null
    const[anchorEl,setAnchorEl]=useState(null)
    const open=Boolean(anchorEl)
    const handleClick=(e) =>{
        setAnchorEl(e.currentTarget)
    }
    const handleClose=(e)=>{
        setAnchorEl(null)
    }
    return(
        <>
            <button 
                className='sign1' 
                id='link-button' 
                onClick={handleClick}
                aria-controls={open?'link-menu':undefined}
                aria-haspopup='true'
                aria-expanded={open?'true':undefined}
            >
                <CgProfile size='18px'/>
                {open?<AiOutlineUp size='18px'/>:<AiOutlineDown size='18px'/>}
            </button>
            <Menu 
                anchorEl={anchorEl}
                open={open}
                MenuListProps={{
                    "aria-labelledby":'link-button'
                }}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Orders</MenuItem>
                <MenuItem onClick={handleClose}>Cards</MenuItem>
                <MenuItem onClick={(e)=>{
                    setIsLogin(!isLogin)
                    handleClose(e)
                }}>Log out</MenuItem>
            </Menu>

        </>
    )
}
export default LinkMenu