import { createSlice } from "@reduxjs/toolkit";

interface ICart {
  isCart: boolean,
  items: Object[] | null
}

const initialState: ICart = {
  isCart: false,
  items: null
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: any) => {
      const isItemInCart = (state.items || []).filter((item: any) => item?.id === action.payload.id).length > 0;
      if (isItemInCart) {
        console.log("This item is already in the cart");
      } else {
        if (Array.isArray(state.items)) {
          state.items.push(action.payload);
        } else {
          state.items = [action.payload];
        }
      }

    },
    removeItem: (state, action: any) => {
      // state.items = state.items.filter((item) => item.id !== action.payload);
    },
    toggleCart: (state, action) => {
      state.isCart = !state.isCart;
    }
  },
});

export const { addItemToCart, removeItem, toggleCart } = cartReducer.actions;
export default cartReducer.reducer;