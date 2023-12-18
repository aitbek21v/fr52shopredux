import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BasketCard from './BasketCard';

const Basket = () => {
    const {basket} = useSelector(state => state)
    return (
        <div id='basket'>
            <div className="container">
                <div className="basket">
                
                     {
                        basket.map(el => <BasketCard el={el}/>)
                    }
                </div>
                   
                </div>
            </div>
    );
};

export default Basket;