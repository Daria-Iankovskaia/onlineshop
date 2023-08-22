import React from "react";
import { useSelector } from "react-redux";

export const BasketPage = () => {
    const numberOfItemsInBasket = useSelector(state => state.basketItemsCountSlice);
    const basket = useSelector(state => state.basketSlice)
    const totalPrice = useSelector(state => state.totalPriceSlice)

    return (
        <div>
            <h1>{numberOfItemsInBasket === 0 ? "Your basket is empty" : `TOTAL items: ${numberOfItemsInBasket}`}</h1>
            <h1>TOTAL AMOUNT: {totalPrice}$</h1>
            {basket && basket.map(product => {
                return <div key={product.id}>
                    <img src={product.image} alt="Product image"></img>
                    <h2>{product.title}</h2>
                    <h3>{product.price}$</h3>
                    <h4>{product.description}</h4>
                    <h5>Quantity: {product.quantinty}</h5>
                </div>
            })}
        </div>
    )
}