import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./basketSlice";
import basketItemsCountSlice from "./basketItemsCountSlice";
import totalPriceSlice from "./totalPriceSlice";

const store = configureStore({
    reducer: {
        basketSlice: basketSlice,
        basketItemsCountSlice: basketItemsCountSlice,
        totalPriceSlice: totalPriceSlice
    }
});

export default store;