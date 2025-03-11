import React, {createContext, useContext} from 'react';
import {useState} from "react";
import storeItem from "../components/StoreItem";
import CartItem from "../components/CartItem";
import storeItems from "../data/items.json";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    //state
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false)

    //functions

    // const item = storeItems.map(item => item)
    // const {id, title, price, imgUrl, description} = item;
    // const cartItem = cartItems.find(cartItem => id === cartItem.id); //now it is object
    // const quantity = cartItem ? cartItem.quantity : 0;

    const removeItems = (item) => {
        const updCartItems = cartItems.filter(cartItem=>cartItem.id !== item.id);
        setCartItems(updCartItems);
    }

    const addItemToCart = (item)=> {
        const isItemInCart = cartItems.find(cartItem=>cartItem.id === item.id) //check if item add in cart
        if(isItemInCart){
            const newCartItem = cartItems.map(
                cartItem=>cartItem.id===item.id ?
                    {...cartItem, quantity: cartItem.quantity+1}
                    : cartItem
            );
            setCartItems(newCartItem);
        }else{
            setCartItems([...cartItems, {...item, quantity: 1}])
        }
    }

    const decreaseItemQuantity = (item) =>{
        const newCartItem = cartItems.map(
            cartItem=>cartItem.id===item.id ?
                {...cartItem, quantity: cartItem.quantity-1}
                : cartItem
        );
        setCartItems(newCartItem);
    }

    //return
    return (
        <CartContext.Provider
            value={{cartItems, setCartItems,
                isCartOpen, setIsCartOpen, removeItems, addItemToCart, decreaseItemQuantity,
                // quantity, cartItem
        }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCounter = () => {
    const counterContext = useContext(CartContext);
    if(!counterContext){
        throw new Error('useCounter can be used only with CartProvider')
    }
    return counterContext;
}
