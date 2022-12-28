import React from "react";
import { FormControl, FormGroup, FormLabel, Slider, ToggleButton, ToggleButtonGroup} from '@mui/material';
import { Box } from "@mui/system";
import CheckboxProton from "./CheckboxProton";


const FilterCheckBox=({brand,changeChecked})=>{
    return(
        <div className="mb16" >                
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
    )
}
export default FilterCheckBox;