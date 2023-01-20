import React from 'react';
import { useState } from 'react';
import './Cart.css'

const Cart = ({cart,onSelect}) => {
    
//     // console.log(cart.id)
//     const [del, setDelete] = useState([]);
//    const deleteProduct=(id)=>{
//         for(let productId of cart){
//             if(id === productId.id){
//                 console.log(del)
//             }else{
//                 return setDelete('')
//             }
//         }
//     console.log('click',id)
//    }
    
    return (
        <div className='cart-container'>
            <h3>Selected Items</h3>
                <br />
                <p>Items: {cart.length}</p>
                
                {cart.map((data) => (
                    <div className="user">
                        <img className='image' src={data.img} alt="" />
                        <h4>{data.name}</h4>
                        {/* <p>{data.id}</p> */}
                        <button onClick={()=>onSelect(cart.id)} className='delete-btn'>
                        <i  className="delete fa-regular fa-trash-can"></i>
                        </button>
                </div>
                ))}
            {/* button  */}
            <div className='choose-btn'>
            <button>Select To Choose</button>
            <p></p>
            <button>Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;