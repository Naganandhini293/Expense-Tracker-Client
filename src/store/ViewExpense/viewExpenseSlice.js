import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    viewCurrentExpenseData: [],
    isLoading: false,
};

const viewExpenseSlice = createSlice({
    name: "viewExpense",
    initialState,
});

export default viewExpenseSlice.reducer;
// console.log(viewExpenseSlice);
