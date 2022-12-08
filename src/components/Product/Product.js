import React from 'react'
import { useLocation } from "react-router-dom";

function Product(props) {

    return (
        <div className='container productContainer'>
            <h2 className='text-center'>{props.selectedProduct.title}</h2>



        </div>
    )
}

export default Product