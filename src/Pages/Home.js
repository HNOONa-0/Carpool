import React, { useState } from "react";
import Card from '../Components/card'
import View from '../Components/view'
import Newcard from '../Components/newcard'
import { Container } from "@mui/system";
const Home=()=>{
    
    const [imgIdx,setImgIdx]=useState(0);
    const slideShow=['207.png','308.png','2008.png']
    return(
        <div className="overflow-y-auto">
            <View slideShow={slideShow} imgIdx={imgIdx} setImgIdx={setImgIdx} />
            {/* <Card/> */}
            
            <Container>
                <Newcard/>
                <Newcard/>
            </Container>
        </div>

    )
}
export default Home;