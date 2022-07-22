import { configureStore } from "@reduxjs/toolkit";
import viewExpenseSlice from "./store/ViewExpense/viewExpenseSlice";
export const store = configureStore({
    reducer: {
        viewExpense: viewExpenseSlice,
    },
});

export default store;
