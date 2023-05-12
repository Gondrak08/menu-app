import { createSlice } from "@reduxjs/toolkit";


interface ICart{
    isCart:boolean,
    items:Object[] |null
}

const initialState:ICart ={
    isCart:false, 
    items:null
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action:any) => {
        // state.items.push(action.payload);
      },
      removeItem: (state, action:any ) => {
        // state.items = state.items.filter((item) => item.id !== action.payload);
      },
  },
});

export const { addItem, removeItem } = cartReducer.actions;
export default cartReducer.reducer;