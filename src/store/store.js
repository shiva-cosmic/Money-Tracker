import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from "./expenseSlice";

const store = configureStore({
    reducer: {
        expenseSlice: expenseSlice
    }
})

export default store
