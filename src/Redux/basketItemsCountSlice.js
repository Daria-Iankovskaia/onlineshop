import { createSlice } from "@reduxjs/toolkit";

const basketItemsCountSlice = createSlice({
    name: "numberOfItemsInBasket",
    initialState: 0,
    reducers: {
        addItemToBasket: state => state + 1,
        removeItemFromBasket: state => state - 1
    }
});

export default basketItemsCountSlice.reducer;
export const { addItemToBasket, removeItemFromBasket } = basketItemsCountSlice.actions;