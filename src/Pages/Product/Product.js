import { List } from "@mui/material";
import React, { useState } from "react";
import FilterPanel from "./FilterPanel";
import ProductList from "./ProductList";
const curatedList=({brand,selectedPrice,selectedRating},searchText)=>{
    return [];
}
const Product=({filterData,setFilterData,searchText} )=>{
// filters    
    const {selectedRating,selectedPrice,brand}= filterData;
    
    const handleChangeChecked = (id) => {
        const brandStateList = brand;
        const changeCheckedBrand = brandStateList.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        // setBrand(changeCheckedBrand);
        setFilterData({...filterData,brand:changeCheckedBrand})
    };
    const handleChangePrice = (event, value) => {
        // setSelectedPrice(value);
        setFilterData({...filterData,selectedPrice:value} )
    };
    const setSelectedRating=(id)=>{
        setFilterData({...filterData,selectedRating:id} )
    }
    const list=curatedList(filterData,searchText)
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