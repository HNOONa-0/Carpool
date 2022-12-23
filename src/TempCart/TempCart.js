import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import myimg from '../images/207.png'
const TempCart=({isTempCart,setIsTempCart})=>{
    if(!isTempCart) return null;
    return(
        <Drawer 
            anchor="right" 
            open={isTempCart}
            onClose={(e)=>setIsTempCart(false) }
        >
            <div>
                <div className="flex p10" style={{maxWidth:'360px'}}>
                    <div className="cart-img flex justify-center">
                        <img src={myimg} style={{width:'100%'}}></img>
                    </div>
                    <div className="flex flex-col">
                        <div className="cart-disc fz14 bold">
                            whats my name eqeqeqeqeqeqe aseqwe
                        </div>
                        <div className="flex align-center " style={{paddingLeft:'10px',gap:'2px'}}>
                            added to cart
                            <AiFillCheckCircle size='17px'></AiFillCheckCircle>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="disc fz14 bold p10">
                        Price: 
                    </div>
                    <div className="disc fz14 bold p10">
                        amount
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="disc fz14 bold p10">
                        Cart total: 
                    </div>
                    <div className="disc fz14 bold p10">
                        amount
                    </div>
                </div>
                <div className="flex justify-center">
                    <Button variant="contained">Go to cart</Button>
                </div>
            </div>
        </Drawer>
    )
}
export default TempCart