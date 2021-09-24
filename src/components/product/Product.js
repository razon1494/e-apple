import React from 'react';
import './Product.css'
const Product=(props) => {
    const {product}=props;
     const { name, img, seller, price, stock, star } = product;

    return (
        <div>
            <div className="singleProduct">
                <div className="product-img">
                    <img src={img} alt="Product Image" />
                </div>
                <div className="product-details">
                    <h4>{name}</h4>
                    <p>By: {seller}</p>
                    <div className="product-brief">
                        <div className="price-stock">
                            <p>${price}</p>
                            <p>Only {stock} items remaining - order soon</p>
                            <button><i class="fas fa-shopping-cart"></i> Add to cart</button>
                        </div>
                        <div className="rate">

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Product;