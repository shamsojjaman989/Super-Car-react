import React from 'react';
import './Shop.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Car from '../Car/Car';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [cars, setCars] = useState([]);
    const [cart, setCart] = useState([]);
    
    const [del, setDel] = useState([]);

    useEffect(()=>{
        fetch('product.json')
        .then(res => res.json())
        .then(data => setCars(data));

    },[])
    // console.log(cars);
    let newCart;
    const addToBuy = (car)=>{    
         newCart = [...cart, car]
        setCart(newCart);
        }
        // console.log(cars)
    // const deleteProduct = (del)=>{
    //     console.log(del)
    // }
    const deleteItem=(id)=>{
        console.log('deleted');
        console.log(del)
        
        setDel({...del, 
        cart:
        del.cart.filter((cartItem)=> cartItem.id!==id)
        
        })
        // console.log(cartItem.id);
    }
    return (
        <div className='shop-container'>
            
            <div className='car-container'>
            <div className='car-list'>
            {
                    cars.map(car =><Car
                    key={car.id}
                    car = {car}
                    addToBuy ={addToBuy}
                    ></Car>)
                }      
             </div>
            </div>
            {/* aside  */}
            <div className='aside-container'>
                <Cart cart={cart}
                key = {cart.id}
                id = {cart.id}
                onSelect = {deleteItem}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;