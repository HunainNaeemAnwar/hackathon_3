import { createSlice } from "@reduxjs/toolkit";
import { ProductProps } from "@/types";

interface ProductState {
  productData: ProductProps[];
}

const initialState: ProductState = {
  productData: [],
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.productData.find(
        (item: ProductProps) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: ProductProps) => item._id === action.payload._id
      );
      existingProduct && existingProduct.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: ProductProps) => item._id === action.payload._id
      );
      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity--;
      }
    },
    deleteProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state) => {
      state.productData = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  resetCart,
} = shopSlice.actions;
export default shopSlice.reducer;
