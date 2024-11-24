import React, { createContext, useContext, useState } from 'react'
const shopingCartContext = createContext({});

const ShopeCartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const getItemsQuantity = (id) =>{
        return cartItems.find((item)=> item.id === id)?.quantity ||0 ;
    }

    const increaseCartQuantity = (id) =>{
        setCartItems((currItems) =>{
            if(currItems.find(item => item.id === id) == null){
                return [...currItems, {id, quantity:1}]
            }else {
                return currItems.map((item)=>{
                    if(item.id === id){
                        return {...item, quantity: item.quantity + 1}
                    }else{
                        return item;
                    }
                })
            }
        })
    }

    const decreaseCartQuantity = (id) =>{
        setCartItems((currItems) =>{
            if(currItems.find(item => item.id === id) == null){
                return currItems.filter((item) => item.id !==  id);
            }else {
                return currItems.map((item)=>{
                    if(item.id === id){
                        return {...item, quantity: item.quantity - 1}
                    }else{
                        return item;
                    }
                })
            }
        })
    }

    return (
        <shopingCartContext.Provider value={{cartItems, getItemsQuantity, increaseCartQuantity, decreaseCartQuantity}}>
            {children}
        </shopingCartContext.Provider>
    )
}

export default ShopeCartProvider;

export const useShopingCart = () =>{
    return useContext(shopingCartContext)
}