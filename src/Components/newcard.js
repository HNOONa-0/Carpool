import './newcard.css'
import React from 'react'
import MyImage from '../images/2008.png';
const newcard = ({ carname, carprise, carfuletype, carimages, carlocation, carrating }) => {
    return (

        <div class="ranCarPage">
            <div class="ranCarImage">
                <img src={MyImage} alt="{carname}" id="example" />
            </div>
            <div class="ranCarDetails">
                <h4 class="shadow">
                    Location: {carlocation}
                </h4>
                <h4> 
                    Name: {carname}
                </h4>
                <h4>
                    FuleType: {carfuletype}
                </h4>
                <h4>
                    Rate: {carrating}⭐
                </h4>
            </div>

            <div class="ranCarPrice">
                <h4>
                    Price: {carprise}
                </h4>
                <div class="ranBookNow">
                    <a><button>BOOK NOW</button> </a>
                </div>
            </div>
        </div>

    )
}

export default newcard
