import React, {useEffect, useState} from 'react';
import Product from '../product/Product';
import './Shop.css'
const Shop=() => {
    const [products, setProducts]=useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                console.log(data);
            });
    },[])
    return (
        <div>
            <div className='full-shop'>
                <div className="product-show">
                    {
                        products.map(product =>
                            <Product
                                key={product.key}
                                product={product}
                                //ekhane function pathabo
                            />
                        )
                    }
                </div>
                <div className="cart">

                </div>

            </div>

        </div>
    );
};

export default Shop;