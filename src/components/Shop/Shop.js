import React from 'react';
import './Shop.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Car from '../Car/Car';

const Shop = () => {
    const [cars, setCars] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('product.json')
        .then(res => res.json())
        .then(data => setCars(data));
    },[])
    // console.log(cars);
const [carDetails,setCarDetails]= useState([])
    const addToBuy = (car)=>{
        const newCart = [...cart, car]
        setCart(newCart);

        console.log(newCart)
        const carDetails = JSON.stringify(newCart);
        console.log("============",carDetails)
       setCarDetails(carDetails)
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
                <h3>Selected Items</h3>
                {/* <br /> */}
                <br />
                <p>Items: {cart.length}</p>
                <p>Name {carDetails.name}</p>
                
            </div>
        </div>
    );
};

export default Shop;