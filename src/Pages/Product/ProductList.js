import React from "react";
import Newcard from '../../Components/newcard'
const ProductList=()=>{
    return(
        <div className="product-list-wrap flex1 overflow-y-auto p16">
          <Newcard/>
          <Newcard/>
          <Newcard/>
          <Newcard/>
          <Newcard/>
          <Newcard/>
        </div>
    )
}
export default ProductList;