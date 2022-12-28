import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import SmallCard from "../Components/SmallCard";
import myimg from '../images/207.png'
const TempCart=({cartData,setCartData,tempCartProduct,setTempCartProduct})=>{
    if(!tempCartProduct) return null;
    const {carImg,name,model,brand,fule,price,rating}=tempCartProduct;
    return(
        <Drawer 
            anchor="right" 
            open={tempCartProduct!==null}
            onClose={(e)=>setTempCartProduct(null) }
        >
            <SmallCard product={tempCartProduct} isCart={true} setTempCartProduct={setTempCartProduct}/>
        </Drawer>
    )
}
export default TempCart