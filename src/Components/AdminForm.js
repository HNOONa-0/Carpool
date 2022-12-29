import { Box, Container } from "@mui/system";
import { Button, FormControl, FormHelperText, Input, InputLabel, OutlinedInput, Typography } from "@mui/material";
import { BiImageAdd } from 'react-icons/bi';
import { FaCar } from 'react-icons/fa';

import React from "react";
const AdminForm=({form,disc,handleOnSubmit,del})=>{
    // use map AdminForm data to newcard
    return(
        <Box
                sx={{m:2,display:"flex",flexDirection:"column",justifyContent:'center'} }
            >
            <Box sx={{display:"flex",justifyContent:'center'}}>
                <Typography variant="h5" sx={{fontFamily:'Raleway'}}>{disc}</Typography>
            </Box>
            {form.map((en,i)=>{
                return (<>
                    <FormControl>
                        <OutlinedInput placeholder={en} required/>
                    </FormControl>            
                </>)
            })}
            {!del&&<Button
                sx={{marginTop:'4px'}}
                variant="contained"
                component="label"
            >
                <BiImageAdd size='32px'/>
                <input
                    type="file"
                    hidden
                />
            </Button>
            }
            <Button
                sx={{marginTop:'4px'}}
                variant="contained"
                component="label"
            >
                Submit
            </Button>
        </Box>
    )
}
export default AdminForm;