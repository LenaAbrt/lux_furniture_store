import React, {useContext} from 'react';
import {CartContext} from "../context/CartContext";
import {Button} from "react-bootstrap";

const AddToCart = ({item}) => {
    const{addItemToCart}=useContext(CartContext);
    return (
        <Button
            onClick={()=>addItemToCart(item)}
            type='button'
            variant="dark"
            className='card_add_cart_btn btn btn-block btn-primary add_btn'

        >
            Add to cart
        </Button>
    );
};

export default AddToCart;
