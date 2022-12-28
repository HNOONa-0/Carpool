import React from 'react'
import './view.css'
import { Container } from "@mui/material";
const view = ({slideShow,imgIdx,setImgIdx}) => {
  setTimeout(function(){
    setImgIdx( (imgIdx+1)%slideShow.length)
  },2000)
  return (
   <Container >
     <div className='slider slide-animate justify-between '>
      <div className='left'>
        <h1 className='title'>Our Best Cars This Year</h1>
      </div>
      <div className='right'>
        <img src={require('../images/'+slideShow[imgIdx]) } alt='' style={{maxHeight:'400px'}}/>
      </div>
    </div>
   </Container>
  )
}

export default view
