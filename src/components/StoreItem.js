import React, {useContext} from 'react';
import {Card} from "react-bootstrap";
import './styles/StoreItem.css';
import {CartContext} from "../context/CartContext";
import RemoveItem from "./RemoveItem";
import AddToCart from "./AddToCart";
import ItemCountInCart from "./ItemCountInCart";

const StoreItem = ({item}) => {
    const {id, title, price, imgUrl, description} = item;

    const{cartItems}=useContext(CartContext);

    const cartItem = cartItems.find(cartItem => id === cartItem.id); //now it is object
    const quantity = cartItem ? cartItem.quantity : 0;

    return (
        <>
            <Card className='card_wrap mb-2'>

                <Card.Img variant="top"
                          src={imgUrl}
                />

                <Card.Body
                    className="d-flex flex-column justify-content"
                    style={{overflow: 'hidden',}}
                >

                    <Card.Title
                        className='card_title d-flex justify-content-between align-items-baseline mb-4'
                        style={{fontSize: "1.2rem"}}
                    >
                        {title}
                        <span
                            className='fw-bolder' style={{marginLeft: "15px"}}
                        >${price}</span>
                    </Card.Title>

                    <Card.Text className='card_text'>
                        {description}
                    </Card.Text>
                    <div>
                        {quantity === 0 ? (
                            <AddToCart item={item}
                            />
                        ) : (
                            <div className='counter_count d-flex align-items-center justify-content-center'
                                 style={{gap: '1rem'}}
                            >
                                <ItemCountInCart quantity={quantity}
                                                 item={item}
                                                 cartItem={cartItem}
                                />

                                <RemoveItem item={item}/>

                            </div>
                        )}

                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default StoreItem;
