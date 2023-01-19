import React from 'react';

const Cart = ({cart}) => {
    console.log(cart)
    return (
        <div>
            <h3>Selected Items</h3>
                {/* <br /> */}
                <br />
                <p>Items: {cart.length}</p>
        </div>
    );
};

export default Cart;