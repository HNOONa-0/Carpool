import React from "react";
import { ToggleButton, ToggleButtonGroup} from '@mui/material';
import { END_PRICE, ratingList, START_PRICE } from "../../Data/Data";
const FilterRatingStar=({selectedRating,setSelectedRating})=>{
    const value=[];
    for(let i=selectedRating-1;i<ratingList.length;i++) value.push(ratingList[i].value);
    return(
        <div className="mb16" style={{backgroundColor:'red'}}>
            <div className="p16" style={{paddingLeft:'16px',paddingBottom:'16px'}}>
                <p className="fz18 bold">Star rating</p>
            </div>
            <ToggleButtonGroup
                value={value}
            >
                {ratingList.map(en=>
                <ToggleButton 
                    sx={{display:'flex'}}
                    key={en.id}
                    value={en.value}
                    onClick={e=>{
                        setSelectedRating(en.id)
                    }}
                >
                    <div className="flex">
                        <div>{en.label[0]}</div>
                        <div>{en.label.slice(1)}</div>
                    </div>
                </ToggleButton>)}
            </ToggleButtonGroup>
        </div>
    )
}
export default FilterRatingStar;