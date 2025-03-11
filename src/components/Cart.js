import React, {useContext} from 'react';
import {CartContext} from "../context/CartContext";
import {Offcanvas} from "react-bootstrap";
import CartItem from "./CartItem";
import storeItems from "../data/items.json";

const Cart = () => {
    const {isCartOpen, setIsCartOpen, cartItems, removeItems, addItemToCart, decreaseItemQuantity} = useContext(CartContext);
    const closeCart = () => {
        setIsCartOpen(false)
    }
    // const isItemInCart
    return (
        <>
            <Offcanvas show={isCartOpen} onHide={closeCart} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {storeItems.map(item => (
                            <CartItem
                                item={item}
                                removeItems={()=>removeItems(item)}
                                addItemToCart={addItemToCart}
                                decreaseItemQuantity={decreaseItemQuantity}
                            />
                    ))}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Cart;
