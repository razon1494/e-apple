import React, {useEffect, useState} from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css'
const Shop=() => {
    const [products, setProducts]=useState([]);
    const [cart, setCart]=useState([]);

    // useEffect(() => {

    // },[products])
    const handleAddToCart=product => {
        const newCart=[...cart, product];
        setCart(newCart);
    }

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);

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
                                handleAddToCart={handleAddToCart}
                                //ekhane function pathabo
                            />
                        )
                    }
                </div>
                <div className="cart">
                    <Cart cart={cart}/>

                </div>

            </div>

        </div>
    );
};

export default Shop;