import React, { useEffect, useRef, useState } from "react";
import { Box, Container } from "@mui/system";
import { Button, Divider, Popover, Typography } from "@mui/material";
import SmallCard from "../Components/SmallCard";
import CartCard from "../Components/CartCard";
const Checkout=({cartData,isLogin})=>{
    // take 
    return(
        <CartCard isLogin={isLogin} cartData={cartData}/>
    )
}
export default Checkout;