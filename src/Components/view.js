import React from 'react'
import './view.css'
import { Container } from "@mui/material";
const view = () => {
  return (
   <Container>
     <div className='slider'>
      <div className='left'>
        <h1 className='title'>Our Best Car In This Year</h1>
      </div>
      <div className='right'>
        <img src={require('../images/slider/peugeot.png')} alt='' />
      </div>
    </div>
   </Container>
  )
}

export default view
