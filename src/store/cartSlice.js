import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    carts: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.carts.find(
        (item) => item.productId === action.payload.productId
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity; // Tăng số lượng
      } else {
        state.carts.push(action.payload); // Thêm sản phẩm mới vào giỏ hàng
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export const selectCarts = (state) => state.cart.carts;
export default cartSlice.reducer;
