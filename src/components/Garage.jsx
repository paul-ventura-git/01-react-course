import React from 'react'
import Car from './Car'

function Garage(props) {
    const carBrand = "Audi";
    //const carInfo = { name:"Ford", model:"Mustang"};

    return (
        <div>Who lives in my {props.sizeOfGarage} garage?
            <Car brand={ carBrand }>::Car One::</Car>            
        </div>
    )
}

export default Garage