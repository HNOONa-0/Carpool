import React from "react";
import { FormControl, FormGroup, FormLabel, Slider, ToggleButton, ToggleButtonGroup} from '@mui/material';
import CheckboxProton from "./CheckboxProton";
import { Box } from "@mui/system";
import { END_PRICE, ratingList, START_PRICE } from "./Data";
const FilterPanel=({brand,changeChecked,selectedPrice,changePrice,selectedRating,setSelectedRating} )=>{
    const value=[]
    for(let i=selectedRating-1;i<ratingList.length;i++) value.push(ratingList[i].value)
    return(
        <div className="product-panel-wrap flex-basis-280 overflow-y-auto p16">
            <div className="mb16"  style={{backgroundColor:'red'}}>                
                <Box sx={{ display: 'flex',width:'100%'} }>
                    <FormControl sx={{ m: 3,width:'100%'} } component="fieldset" variant="standard">
                        <FormLabel component="legend" sx={{fontWeight:'bold',fontSize:'18px'}}>Brand</FormLabel>
                            <FormGroup>
                                {brand.map((en,i)=>{
                                    return <CheckboxProton en={en} changeChecked={changeChecked} key={en.id}/>
                                })}
                            </FormGroup>
                    </FormControl>
                </Box>
            </div>
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
        </div>
    )
}
export default FilterPanel;