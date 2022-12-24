import {  Slider } from "@mui/material";
import React from "react";
import { END_PRICE, START_PRICE } from "../../Data/Data";

const FilterSlider=({selectedPrice,changePrice})=>{
    return(
        <div className="mb16" style={{backgroundColor:'red'}}>                
            <div className="p16" style={{paddingLeft:'16px',paddingBottom:'16px'}}>
                <p className="fz18 bold">Price</p>
            </div>
            <div style={{paddingLeft:'24px',paddingRight:'24px'}}>
                <Slider
                    min={START_PRICE}
                    max={END_PRICE}
                    value={selectedPrice}
                    valueLabelDisplay="auto"
                    onChange={changePrice}
                />
            </div>
        </div>
    )
}
export default FilterSlider;