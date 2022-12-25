import React from "react";
import { Box, Container } from "@mui/system";
import { Button, Divider, Typography } from "@mui/material";
const Checkout=({cartData})=>{

    return(
        <Container maxWidth="md" minWidth="sm">
            <Box sx={{ bgcolor: 'white',
                color:'black',fontFamily:'Raleway'} }
            >
                <Box sx={{p:2}}>
                    <Box sx={{display:'flex',justifyContent:'space-between'} }>
                        <Typography variant="h5">car1 Name</Typography>
                        <Typography variant="h5">name</Typography>
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'space-between'} }>
                        <Typography variant="h5">car1 quantity</Typography>
                        <Typography variant="h5">quantity</Typography>
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'space-between'} }>
                        <Typography variant="h5">car1 total price</Typography>
                        <Typography variant="h5">price</Typography>
                    </Box>
                </Box>
                <Divider/>
                <Box sx={{p:2,display:'flex',flexDirection:'column' ,justifyContent:'center'}}>
                    <Typography variant="h5">Total:</Typography>
                    <Button variant="contained">pay up</Button>
                </Box>
                
            </Box>
      </Container>

    )
}
export default Checkout;