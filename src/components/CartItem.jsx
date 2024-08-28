
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, increaseQuantity, decreaseQuantity } from '../features/cartSlice';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={item.thumbnail} className="card-img" alt={item.title} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">Price: ${item.price}</p>
                        <p className="card-text">Quantity: {item.quantity}</p>
                        <p className="card-text">Total: ${item.totalPrice}</p>
                        <div className="d-flex">
                            <button className="btn btn-secondary" onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                            <button className="btn btn-secondary" onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                        </div>
                        <button className="btn btn-danger mt-2" onClick={() => dispatch(removeItem(item.id))}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
