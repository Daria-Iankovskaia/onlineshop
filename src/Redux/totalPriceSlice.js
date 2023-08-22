import { createSlice } from "@reduxjs/toolkit";

const totalPriceSlice = createSlice({
    name: "totalPrice",
    initialState: 0,
    reducers: {
        calculateTotalPrice: (state, action) => {
            return state + action.payload.price
        }
    }
})

export default totalPriceSlice.reducer;
export const { calculateTotalPrice } = totalPriceSlice.actions;