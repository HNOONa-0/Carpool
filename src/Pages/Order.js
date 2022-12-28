import { Button, Card, CardActions, CardContent, CardHeader, Grid,Item, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import OrderCard from "../Components/OrderCard";
const Order=({userOrder})=>{
    // use map Order data to newcard
    const arr=["order1","order1","order1"]
    const navigate=useNavigate();

    // navigate to link with order
    // const handleOnClick = useCallback(() => navigate('/', {replace: true}), [navigate]);
    return(
        <Grid container spacing={2} sx={{marginTop:'4px'}}>
            {arr.map((en,i)=>{
                return(<OrderCard/>
                )
            })}
        </Grid>
    )
}
export default Order;