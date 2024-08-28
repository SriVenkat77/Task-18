import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import { addItem } from './features/cartSlice';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('/product.json') 
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data); 
                if (Array.isArray(data.products)) {
                    data.products.forEach(item => {
                        dispatch(addItem(item));
                    });
                } else {
                    console.error('Expected an array of products');
                }
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, [dispatch]);

    return (
        <div>
            <Navbar />
            <Cart />
        </div>
    );
};

export default App;
