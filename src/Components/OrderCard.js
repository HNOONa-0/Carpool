import { Button, Card, CardActions, CardContent, CardHeader, Grid,Item, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
const OrderCard=({userOrderCard})=>{
    // use map OrderCard data to newcard
    // this should take a cart
    
    const arr=["OrderCard1","OrderCard2","OrderCard3"]
    
    // navigate to link with OrderCard
    // const navigate=useNavigate();
    // const handleOnClick = useCallback(() => navigate('/', {replace: true}), [navigate]);
    return(
    <Grid item xs={12} md={6}>
        <Card  
            sx={{cursor:"pointer"}}
            // onClick={handleClick}
        >
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    #36557273
                </Typography>
                <Typography variant="h5" component="div">
                    Total cars:4
                </Typography>
                <Typography variant="h5" component="div">
                    Total cost:44444L.E
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Click for more details
                </Typography>
            </CardContent>
        </Card>
    </Grid>   
    )
}
export default OrderCard;