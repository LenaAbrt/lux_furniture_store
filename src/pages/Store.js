import React, {useContext} from 'react';
import {Col, Row} from "react-bootstrap";
import storeItems from "../data/items.json";
import StoreItem from "../components/StoreItem";
import {CartContext} from "../context/CartContext";
import '../components/styles/StoreItem.css';

const Store = () => {
    // const{cartItems, setCartItems, addItemToCart, decreaseItemQuantity}=useContext(CartContext);

    return (
        <div className='store_wrapper'>
            <Row xs={1} sm={2} md={3} lg={4} xxl={5}>
                {storeItems.map(item => (
                    <Col>
                        <StoreItem
                        item={item}
                        // removeItems={removeItems}
                        // addItemToCart={addItemToCart}
                        // decreaseItemQuantity={decreaseItemQuantity}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Store;
