import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: "basket",
    initialState: [],
    reducers: {
        addItemContentToBasket: (state, action) => {
            const existingItemIndex = state.findIndex(product => product.id === action.payload.id);

            if(existingItemIndex !== -1) {
                state[existingItemIndex].quantinty += 1;
            } else {
                state.push({...action.payload, quantinty: 1});
            }
        }
    }
})

export default basketSlice.reducer;
export const { addItemContentToBasket } = basketSlice.actions;

