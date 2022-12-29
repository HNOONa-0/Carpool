import React, { useEffect, useRef, useState } from "react";
import { Box, Container } from "@mui/system";
import { Button, Divider, Popover, Typography } from "@mui/material";
import SmallCard from "./SmallCard";
const computeSum=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++)sum+=arr[i].quantity*arr[i].price;
    return sum;
}
const CartCard=({cartData,isLogin,isOrder})=>{
    const buttonRef=useRef();
    const[anchorEl,setAnchorEl]=useState(null)
    useEffect(()=>{
        setAnchorEl(buttonRef.current)
    },[])
    // maxWidth="md" minWidth="sm"
    return(
        <Container sx={{maxWidth:"md",minWidth:"sm"}}>
            <Box sx={{ bgcolor: 'white',
                color:'black',fontFamily:'Raleway'} }
            >
                <Box sx={{p:2}}>
                    <SmallCard product={{}} isCart={false}/>
                    <SmallCard product={{}} isCart={false}/>
                </Box>
                <Divider/>
                <Box sx={{p:2,display:'flex',flexDirection:'column' ,justifyContent:'center'}}>
                    {!isOrder&&<Typography variant="h5">Credit:</Typography>}
                    <Typography variant="h5">Total:</Typography>
                    {!isOrder&&<Button 
                        variant="contained" disabled={!isLogin}
                        ref={buttonRef}
                    >
                        complete
                    </Button>}
                </Box>
                {!isOrder&&<Popover 
                    open={!isLogin} 
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center"
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "center"
                    }}
                >
                    <Typography variant="h6" sx={{padding:'4px'}}>you must login first</Typography>
                </Popover>
                }
            </Box>
      </Container>
    )
}
export default CartCard;