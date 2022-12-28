import React from "react";
import Newcard from '../../Components/newcard'
const ProductList=({setTempCartProduct})=>{
    return(
        <div className="product-list-wrap flex1 overflow-y-auto p16 second-to-shrink">
          <Newcard
            setTempCartProduct={setTempCartProduct}
          />
        </div>
    )
}
export default ProductList;