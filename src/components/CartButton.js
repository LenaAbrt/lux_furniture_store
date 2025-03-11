import React from 'react';
import {Badge, Button} from "react-bootstrap";
import {RiShoppingBag4Fill} from "react-icons/ri";

const CartButton = ({cartToggle, quantity}) => {
    const circleStyle = {
        height: "20px",
        width: "20px",
        borderRadius: "50%",
        opacity:'0.8',
        padding: "3.5px",
        fontWeight: "bold",
        backgroundColor: "red !important",
        zIndex: "5",
        marginLeft: "-50%",
        marginTop: "15%"
    }

    return (
        <Button
            onClick={cartToggle}
            variant="outline-secondary"
            className='d-flex ml-10 cart_btn'
            style={{border: "none"}}
            //todo onClick that will open cart
        >
            <RiShoppingBag4Fill
                size={25}
                style={{
                    color:'#56423b'
                }}
                className='me-4 cart_bag'/>
            <Badge
                bg="dark"
                style={circleStyle}
            >0</Badge>
        </Button>

    );
};

export default CartButton;
