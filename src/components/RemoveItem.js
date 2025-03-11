import React, {useContext} from 'react';
import {MdDelete} from "react-icons/md";
import {CartContext} from "../context/CartContext";

const RemoveItem = ({item}) => {
    const{removeItems}=useContext(CartContext);
    return (
        <button className='remove_btn'
                onClick={()=>removeItems(item)}
        ><MdDelete/></button>
    );
};

export default RemoveItem;
