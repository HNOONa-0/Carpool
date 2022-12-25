import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Newcard from '../Components/newcard'
import my207 from '../images/207.png'
const ProductWithId=({setTempCartProduct})=>{
    
    const[productData,setProductData]=useState({});
    const {productId}=useParams();
    useEffect(()=>{
        // validate product
    },[])
    console.log(productId)
    const {carImg,name,model,brand,fule,price,rating,quantity}=productData;
    const arr=["name","model","brand","fule","price","rating","quantity"];
    return(
        <Container maxWidth="sm" sx={{display:'flex',justifyContent:'center'} }>
                <Card
                    sx={{width:'100%'}}
                >
                    <CardMedia
                        component={"img"}
                        image={my207}
                        sx={{height:"320px"}}
                    >
                    </CardMedia>
                    <CardContent variant="h5" sx={{fontFamily:'Raleway'}}>
                        {arr.map((en,i)=>{
                            return <Typography variant="h5" key={arr[i]}>{en.charAt(0).toUpperCase()+en.slice(1)}:{productData[en]}</Typography>
                        })}
                    </CardContent>
                    <CardActions sx={{margin:"16px",display:"flex",justifyContent:'center'}}>
                        <Button variant="contained"
                            onClick={e=>{
                                // set temp cart data to show temp cart
                                setTempCartProduct({});
                            }}
                        >Add to cart</Button>
                    </CardActions>
                </Card>
        </Container>
    )

}
export default ProductWithId;