import React from 'react';
import Box from '@mui/material/Box';
import { pink } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';
  import './footer.css'
const Footer = (props) => (
  <footer className="footer">
    <p className='text'>Contact Us <SvgIcon {...props}>
      <path fontSize='20px' d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon> </p>
   
  
  </footer>
);
  
export default Footer;