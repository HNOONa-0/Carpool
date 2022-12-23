import React from 'react';
import { Checkbox, FormControlLabel} from '@mui/material';

const CheckboxProton = ({ changeChecked, en }) => {
  const { checked, label, id} = en;
  return (
  <FormControlLabel
    sx={{display:'flex',flexDirection:'row-reverse',justifyContent:'space-between',margin:0}}
    control={
        <Checkbox checked={checked} onChange={e=>changeChecked(id) } />
      }
    label={label}
  />
  )
  // return (
  //   <Box sx={{ display: 'flex',width:'100%'} }>
  //     <FormControl sx={{ m: 3,width:'100%'} } component="fieldset" variant="standard">
  //       <FormLabel component="legend">Brand</FormLabel>
  //         <FormGroup>
  //           {brand.map((en,i)=>{
  //             return(
  //               <FormControlLabel
  //                 sx={{display:'flex',flexDirection:'row-reverse',justifyContent:'space-between',margin:0}}
  //                 control={
  //                     <Checkbox checked={checked} key={id} onChange={changeChecked} />
  //                   }
  //                 label={label}
  //               />
  //             )
  //           })}
  //         </FormGroup>
  //     </FormControl>
  //   </Box>
  // );
};

export default CheckboxProton;