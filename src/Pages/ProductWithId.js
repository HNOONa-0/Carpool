import { Card, CardMedia } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import Newcard from '../Components/newcard'
import my207 from '../images/207.png'
const ProductWithId=()=>{
    const {productId}=useParams();
    useEffect(()=>{
        // validate product
    },[])
    console.log(productId)
    return(
        <Container maxWidth="sm" sx={{backgroundColor:'blue',display:'flex',justifyContent:'center',height:'calc(100vh - 80px)'}}>
                <div style={{height:'100%'}}>
                    <img src={my207} style={{height:'140px',margin:0}}></img>
                </div>
        </Container>
    )

}
export default ProductWithId;