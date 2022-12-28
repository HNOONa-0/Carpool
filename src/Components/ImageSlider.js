import React, { useEffect, useState } from "react";

const ImageSlider=({imgIdx,setImgIdx})=>{
    const slides=['https://i.pcmag.com/imagery/articles/00Cx7vFIetxCuKxQeqPf8mi-66..v1667334873.jpg',
'https://imgv3.fotor.com/images/homepage-feature-card/Upload-an-image.jpg'];
    const sliderStyle={
        height:'100%',
        position:'relative'
    }
    const containerStyle={
        width:'500px',
        height:'250px',
        margin:'0 auto',
    }
    const slideStyle={
        width:'100%',
        height:'100%',
        borderRadius:'10px',
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundImage:"url("+ slides[imgIdx] + ")"
    }
    setTimeout(function(){
        setImgIdx( (imgIdx+1)%slides.length)
    },2000)
    return(
        <div>
            hello world
            <div style={containerStyle}>
                <div style={sliderStyle}>
                    <div style={slideStyle}>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ImageSlider