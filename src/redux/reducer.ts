import { createSlice } from "@reduxjs/toolkit";

interface ICart {
  isCart: boolean,
  items: Object[] | null,
  finalPrice:number
}

const initialState: ICart = {
  isCart: false,
  items: null,
  finalPrice:0
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: any) => {
      const isItemInCart = (state.items || []).filter((item: any) => item?.id === action.payload.id).length > 0;
      const value = { ...action.payload, count: 1 }
      if (isItemInCart) {
        const index = (state.items || []).findIndex((item: any, index: number) => item.id === action.payload.id)
        const clonedState: Object[] = Object.assign([{}], state.items);
        if (state.items != null && state.items != undefined && state?.items[index]?.count) {
          const count = state.items[index].count + 1
          const value = { ...action.payload, count: count }
          clonedState[index] = value;
        } else {
          clonedState[index] = value;
        }
        state.items = clonedState;
      } else {
        if (Array.isArray(state.items)) {
          state.items.push(value);
        } else {
          state.items = [value];
        }
      }

    },

    getAllPrice:(state)=>{  
      const prices:any[] = [];
      const items  = state.items;
      for( const  key in state.items){
        const value = items[key]?.price * items[key]?.count
        prices.push(value)
      };
      const finalPrice =  prices.reduce((x,y)=>x + y,0);
      state.finalPrice =  finalPrice;
    },

    removeItem: (state, action: any) => {
      const index = state.items?.findIndex((item:any)=>item.id === action.payload.id);
      const filtered:Object[]  = (state.items?.filter((item:any,index)=>{
        if(item?.id !== action.payload.id){
          return item
        }
      })||[])
      state.items = filtered;
    },

    toggleCart: (state, action) => {
      state.isCart = !state.isCart;
    }
    
  },
});

export const { addItemToCart, getAllPrice, removeItem, toggleCart } = cartReducer.actions;
export default cartReducer.reducer;