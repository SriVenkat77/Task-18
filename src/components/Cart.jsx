
import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
    const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);

    return (
        <div className="container mt-5">
            <h2>Your Cart</h2>
            {items.length > 0 ? (
                <>
                    {items.map(item => <CartItem key={item.id} item={item} />)}
                    <div className="mt-3">
                        <h4>Total Quantity: {totalQuantity}</h4>
                        <h4>Total Amount: ${totalAmount}</h4>
                    </div>
                </>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;
