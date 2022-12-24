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
};

export default CheckboxProton;