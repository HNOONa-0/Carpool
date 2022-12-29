import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import SmallCard from "../Components/SmallCard";
import myimg from '../images/207.png'

const TempCart=({cartData,setCartData,tempCartProduct,setTempCartProduct})=>{
    if(!tempCartProduct) return null;
    // display current product info & total sum
    return(
        <Drawer 
            anchor="right" 
            open={tempCartProduct!==null}
            onClose={(e)=>{
                // add to cart(set cart data) after we close the drawer
                setTempCartProduct(null)
            } }
        >
            <SmallCard
                // cart data for computing sum
                cartData={cartData}
                // there is a case where we need to add to cart from inside of small card
                setCartData={setCartData}
                // display current cart product
                tempCartProduct={tempCartProduct}
                // incase i click go to cart
                setTempCartProduct={setTempCartProduct}
                // iscart for specific version of small
                isCart={true} 
            />
        </Drawer>
    )
}
export default TempCart