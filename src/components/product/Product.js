import React from 'react';
import Rating from 'react-rating';
import Feature from '../feature/Feature';
import './Product.css'
const Product=(props) => {
    const {product}=props;
    const {name, img, seller, price, stock, star}=product;
    const features=product.features;

    return (
        <div className='product-box'>
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
                            <p>Only {stock} items remaining</p>
                            <button className='add-btn' onClick={()=>props.handleAddToCart(props.product)}><i class="fas fa-shopping-cart"></i> Add to cart</button>
                        </div>
                        <div className="rate">
                            <Rating className='rating'
                                initialRating={star}
                                emptySymbol="fa fa-star-o fa-2x"
                                fullSymbol="fa fa-star fa-2x"
                                readonly
                            >
                            </Rating>
                            <h3>Features</h3>
                            {
                                features.map(feature =><Feature feature={feature}/> )
                            }
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Product;