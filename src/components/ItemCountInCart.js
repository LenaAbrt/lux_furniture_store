import React, {useContext} from 'react';
import {CartContext} from "../context/CartContext";

const ItemCountInCart = ({quantity, item, }) => {
    const{addItemToCart, decreaseItemQuantity}=useContext(CartContext);
    return (
        <div className='counter d-flex align-items-center justify-content-center'
             style={{gap: '1rem'}}>
            <button
                onClick={()=>decreaseItemQuantity(item)}
                className='card_decrease_btn'
                disabled={quantity>1 ? false : true}
            >-
            </button>
            <span className='fs-4'>{quantity}</span>
            <button
                onClick={()=>addItemToCart(item)} className='card_increase_btn'

            >+
            </button>

        </div>
    );
};

export default ItemCountInCart;
