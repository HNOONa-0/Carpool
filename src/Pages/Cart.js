import { Button } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Link } from "react-router-dom";
import React from "react";
import Newcard from '../Components/newcard'
const removeFromCart=(product,cart)=>{
    let arr=cart;
    for(let i=0;i<arr.length;i++)if(arr[i]._id===product._id)arr[i].quantity--;
    arr.filter(en=>en.quantity!==0);
    return arr;
}
const addToCart=(product,cart)=>{
    let arr=cart;
    let ok=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]._id===product._id){
            arr[i].quantity++;
            ok=1;
        }
    }
    if(!ok)arr.push({...product,quantity:1} );
    return arr;
}
const Cart=({cartData,userData})=>{
    // use map cart data to newcard
    
    return(
        <Container maxWidth="sm">
            <Newcard removeCart={true}/>        
            <Box
                sx={{width:"100%",display:'flex',justifyContent:'center'} }
            >
            <Button
                component={Link} to='/checkout'
                variant="contained"
            >
                go to checkout
            </Button>
            </Box>
        </Container>
    )
}
export default Cart;