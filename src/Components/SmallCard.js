import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import myimg from '../images/207.png'

const SmallCard=({product,isCart,setTempCartProduct})=>{
    const style={justifyContent:isCart?"space-between":"normal"};
    const {carImg,name,model,brand,fule,price,rating}=product;
    return(
        <div>
            <div className="flex p10" style={{maxWidth:'360px'}}>
                <div className="cart-img flex justify-center">
                    <img src={myimg} style={{width:'100%'}}></img>
                </div>
                <div className="flex flex-col">
                    <div className="cart-disc fz14 bold">
                        whats my name eqeqwseweqe
                    </div>
                    {isCart&&
                    <div className="flex align-center " style={{paddingLeft:'10px',gap:'2px'}}>
                        added to cart
                        <AiFillCheckCircle size='17px'></AiFillCheckCircle>
                    </div>
                    }
                </div>
            </div>
            <div className="flex" style={style}>
                <div className="disc fz14 bold p10">
                    Price: 
                </div>
                <div className="disc fz14 bold p10">
                    amount
                </div>
            </div>
            {!isCart&&
            <div className="flex" style={style}>
                <div className="disc fz14 bold p10">
                    Quantity:
                </div>
                <div className="disc fz14 bold p10">
                    amount
                </div>
            </div>
            }
            {isCart&&
            <div className="flex" style={style}>
                <div className="disc fz14 bold p10">
                    Cart total: 
                </div>
                <div className="disc fz14 bold p10">
                    amount
                </div>
            </div>
            }
            {isCart&&
                <div className="flex justify-center">
                    <Button variant="contained" component={Link} to="/cart" onClick={e=>{
                        setTempCartProduct(null)
                    }}>Go to cart</Button>
                </div>
            }
        </div>
    )
}
export default SmallCard