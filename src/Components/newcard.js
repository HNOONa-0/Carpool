import './newcard.css'
import React from 'react'
import MyImage from '../images/2008.png';
import { Button } from '@mui/material';
const newcard = ({ carname, carprise, carfuletype, carimages, carlocation, carrating,setTempCartProduct,stock,isCart,removeCart}) => {
    return (
        <div class="ranCarPage">
            <div class="ranCarImage">
                <img src={MyImage} alt="{carname}" id="example" />
            </div>
            <div class="ranCarDetails">
                <h4 class="shadow">
                    Location: {carlocation}
                </h4>
                <h4> 
                    Name: {carname}
                </h4>
                <h4>
                    FuleType: {carfuletype}
                </h4>
                <h4>
                    Quantity: {stock}
                </h4>
                <h4>
                    Rate: {carrating}⭐
                </h4>
            </div>

            <div class="ranCarPrice">
                <h4>
                    Price: {carprise}
                </h4>
                <div class="ranBookNow">
                {/* <div> */}
                    {/* <a><button>BOOK NOW</button> </a> */}
                    {!isCart&&<Button variant="contained"
                    size='small'
                    sx={{backgroundColor:removeCart?"#e57373":"#3f51b5",marginBottom:"20px"}} 
                    onClick={e=>{
                        // send temp cart product
                        setTempCartProduct({});
                    }}>{removeCart?"remove from cart":"add to cart"}</Button>
                }
                </div>
            </div>
        </div>

    )
}

export default newcard
