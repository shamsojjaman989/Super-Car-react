import React from 'react';
import './Shop.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Car from '../Car/Car';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [cars, setCars] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('product.json')
        .then(res => res.json())
        .then(data => setCars(data));
    },[])
    // console.log(cars);

    const addToBuy = (car)=>{
        const newCart = [...cart, car]
        setCart(newCart);

        console.log(newCart)
        
    }
    return (
        <div className='shop-container'>
            <div className='car-list'>
                {
                    cars.map(car =><Car
                    key={car.id}
                    car = {car}
                    addToBuy ={addToBuy}
                    ></Car>)
                }
            </div>
            {/* aside  */}
            <div className='aside-container'>
                <Cart cart={cart}></Cart>
                
            </div>
        </div>
    );
};

export default Shop;