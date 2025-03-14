import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
};



const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
    
            state.items.push(action.payload);
            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price + sum;
              }, 0);
        },
        removeItem(state, action) {
            console.log(action)
            let newItemes  = [] 
            let flag = true
            for (let i = 0; i < state.items.length ; i++) {
                if (state.items[i].id === action.payload && flag){
                    flag = !flag
                    state.totalPrice = state.totalPrice - state.items[i].price;
                    continue
                }
                newItemes.push(state.items[i])
              }
            state.items = newItemes
        },
        clearItems(state) {
            state.items = [];
            state.totalPrice = 0;
        },
    },
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;