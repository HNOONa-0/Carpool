import React from "react";
import FilterCheckBox from "../Component/FilterCheckBox";
import FilterRatingStar from "../Component/FilterRatingStar";
import FilterSlider from "../Component/FilterSlider";
import './ProductStyle.css'
const FilterPanel=({brand,changeChecked,selectedPrice,changePrice,selectedRating,setSelectedRating} )=>{
    return(
        <div className="product-panel-wrap flex-basis-280 overflow-y-auto p16 first-to-shrink" style={{backgroundColor:'#DCDEE2'}}>
            <FilterCheckBox
                brand={brand}
                changeChecked={changeChecked}
            />
            <FilterSlider
                selectedPrice={selectedPrice}
                changePrice={changePrice}
            />
            <FilterRatingStar
                selectedRating={selectedRating}
                setSelectedRating={setSelectedRating}
            />
        </div>
    )
}
export default FilterPanel;