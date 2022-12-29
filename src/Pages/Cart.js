import { Button } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Link } from "react-router-dom";
import React from "react";
import Newcard from '../Components/newcard'

const Cart=({cartData,userData})=>{
    // use map cart data to newcard
    
    return(
        <Container maxWidth="sm">
            <Newcard/>        
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