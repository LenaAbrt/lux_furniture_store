import React from 'react';
import {Stack} from "react-bootstrap";
import './styles/CartItem.css';
import ItemCountInCart from "./ItemCountInCart";
import RemoveItem from "./RemoveItem";

const CartItem = ({item, quantity}) => {
    const {title, price, imgUrl} = item;

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    return (
        <>
            <Stack gap={3}>
                <div className='item_in_cart_wrapper'>

                    <img src={imgUrl}
                         alt='item image'
                         className="item_in_cart_imgUrl"/>
                    <div className="item_in_cart_title">
                        {title}
                    </div>


                    <div className="item_in_cart_price">
                        ${price}
                    </div>
                    <div></div>
                    <p>Est. delivery: {date}</p>
                    <div></div>
                    <ItemCountInCart quantity={quantity}
                                     item={item}

                    />
                    <div style={{color: "#8a8a93", display:"flex",alignItems:"center", paddingLeft: "10px"}}>edit</div>

                    <RemoveItem item={item}/>
                </div>
            </Stack>
        </>
    );
};

export default CartItem;
