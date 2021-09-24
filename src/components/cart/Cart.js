import React from 'react';
import './Cart.css'
const Cart=(props) => {
    const {cart}=props;
    console.log(cart);
    const shippingReducer=(prev, product) => prev+product.shipping;
    const shipping=cart.reduce(shippingReducer, 0);
    const subTotalReducer=(prev, product) => prev+product.price;
    const subTotal=cart.reduce(subTotalReducer, 0);
    const tax=subTotal*.10;
    const grandTOtal=subTotal+tax;
    return (
        <div className='cart-container'>
            <h2>Order Summary</h2>
            <p>Items Ordered: {cart.length}</p>
            <div className="order-details">
                <p>Items: {cart.length}</p>
                <p>Shipping & handeling: {shipping.toFixed(2)}</p>
                <p>Sub Total: {subTotal.toFixed(3)}</p>
                <p>Tax: {tax.toFixed(1)}</p>
                <h4>Order Total: {grandTOtal.toFixed(3)}</h4>
            </div>

        </div>
    );
};

export default Cart;