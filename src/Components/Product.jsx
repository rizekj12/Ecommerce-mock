import React from 'react';
import "../Product.css"


const Product = (props) => {
    return ( 
        <div className="product-div">
            <p>{props.type}</p>
            <img className="product-img" src={props.image} alt="shirt"/>
            <button>add to cart</button>
        </div>
     );
}
 
export default Product;