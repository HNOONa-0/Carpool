import React, { useEffect, useRef, useState } from "react";
import { Box, Container } from "@mui/system";
import { Button, Divider, Popover, Typography } from "@mui/material";
import SmallCard from "../Components/SmallCard";
import CartCard from "../Components/CartCard";
const Checkout=({cartData,isLogin})=>{
    // map each in cart to typographycar to info
    // mode of buttton add,remove,none
    
    return(
        <CartCard isLogin={isLogin} />
    )
}
export default Checkout;