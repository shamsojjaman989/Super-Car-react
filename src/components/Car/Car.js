import React from 'react';
import './Car.css'

const Car = (props) => {
    const {addToBuy, car} = props
    const {id,img, name, seller,price,ratings,category} =car;
    // console.log(props.car);
    return (
        <div className='car-container'>
            <img src={img} alt="" />
            <div className='car-info'>
            <h4>Model: {name}</h4>
            <p>Seller: {seller}</p>
            <p>Category: {category}</p>
            <p>Price: ${price}</p>
            </div>
            <button onClick={()=>addToBuy(car)} className='buy-btn'>Buy Now</button>
        </div>
    );
};

export default Car;