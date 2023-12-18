import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { useDispatch } from 'react-redux';

const ProductCard = ({el}) => {
    const dispatch = useDispatch()
    const addToBasket = () => {
        dispatch({type: "ADD_TO_BASKET", payload: el})
    }
    return (
        <div className="card">
            <img src={el.image} alt="" />
            <div className="card--titles">
                <h4>{el.title}</h4>
                <h4>{el.price}</h4>
            </div>
            <div className="card--btns">
                <button><FaRegHeart /></button>
                <button onClick={()=> addToBasket(el)}><SlBasket /></button>
            </div>
        </div>
    );
};

export default ProductCard;