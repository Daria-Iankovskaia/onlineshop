import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemToBasket } from "../Redux/basketItemsCountSlice";
import { addItemContentToBasket } from "../Redux/basketSlice"
import { calculateTotalPrice } from "../Redux/totalPriceSlice";

export const Button = ({ productDetails }) => {
    const numberOfItemsInBasket = useSelector(state => state.basketItemsCountSlice);
    const totalPrice = useSelector(state => state.totalPriceSlice);

    const dispatch = useDispatch();
    debugger;
    return (
        <div>
            <button onClick={() => { dispatch(addItemToBasket()); dispatch(addItemContentToBasket(productDetails)); dispatch(calculateTotalPrice(productDetails))}}>Add to basket</button>
            <h3>The total number of all items in basket is {numberOfItemsInBasket}</h3>
            <h3>Total amount: {totalPrice}</h3>
        </div>
    )
}
