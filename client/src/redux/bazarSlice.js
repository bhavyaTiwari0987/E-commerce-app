import { createSlice } from "@reduxjs/toolkit";
import Popup from 'react-popup';
import ReactDom from 'react-dom';




const initialState = {
  productData: [],
  userInfo: null,
};

let mySpecialPopup = Popup.register({
  title: 'I am special',
  content: 'Since I am special you might need me again later. Save me!',
  buttons: {
      left: ['cancel'],
      right: ['ok']
  }
});

export const bazarSlice = createSlice({
  name: "bazar",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const item = state.productData.find((item) => {
          return item._id === action.payload._id
        } );
        console.log(action.payload);
        if(item){
            item.quantity += action.payload.quantity;
        }else{
            state.productData.push(action.payload);
        }
    },
    deleteItem: (state, action) => {
      state.productData = state.productData.filter((item) => item._id !== action.payload._id); 
    },
    resetCart: (state, action) => {
      state.productData = [];
    },
    increaseQuantity: (state, action) => {
      console.log(action.payload._id);
      const item = state.productData.find((item) => item._id === action.payload._id);
      if(item){
        item.quantity ++;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.productData.find((item) => item._id === action.payload._id);
      if(item){
        if(item.quantity !== 0){
          item.quantity--;
        }
      }
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state, action) => {
      state.userInfo = null;
    }
  },

});

export const { addToCart , deleteItem, resetCart, increaseQuantity, decreaseQuantity, addUser, removeUser} = bazarSlice.actions;

export default bazarSlice.reducer;
