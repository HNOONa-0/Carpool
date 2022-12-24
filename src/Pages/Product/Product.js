import { List } from "@mui/material";
import React, { useState } from "react";
import { dataList, ratingList, END_PRICE, START_PRICE, supportedBrand } from "./Data";
import FilterPanel from "./FilterPanel";
import ProductList from "./ProductList";
const initBrand=()=>{
    let arr=[];
    for(let i=0;i<supportedBrand.length;i++) arr.push({id:i,checked:false,label:supportedBrand[i] } );
    return arr;
}
const Product=()=>{
// filters    
    const [selectedRating, setSelectedRating] = useState(1);
    const [selectedPrice, setSelectedPrice] = useState([START_PRICE,END_PRICE]);
    const [brand,setBrand]=useState(initBrand());
// data displayed  
    const [list, setList] = useState(dataList);
    const [resultsFound, setResultsFound] = useState(true);
  
    const handleChangeChecked = (id) => {
        // console.log("pressing hello")
        const brandStateList = brand;
        const changeCheckedBrand = brandStateList.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setBrand(changeCheckedBrand);
    };
    const handleChangePrice = (event, value) => {
        // console.log(value);
        setSelectedPrice(value);
    };
  

    return(
        <div className="product rest-height flex flex-col">
            <div className="product-panel-list-wrap flex flex1 overflow-y-auto">
                <FilterPanel
                    brand={brand}
                    changeChecked={handleChangeChecked}
                    selectedPrice={selectedPrice}
                    changePrice={handleChangePrice}
                    selectedRating={selectedRating}
                    setSelectedRating={setSelectedRating}
                />
                <ProductList/>
            </div>
        </div>
    )
}
export default Product;