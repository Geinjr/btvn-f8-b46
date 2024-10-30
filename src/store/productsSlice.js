import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [
    {
      id: 1,
      name: "Product 1",
      imageUrl:
        "https://i.pinimg.com/564x/66/c6/e1/66c6e144cafc4268bb1ad756d7e2666f.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      imageUrl:
        "https://i.pinimg.com/enabled_lo/564x/cc/7a/b8/cc7ab8857629f0709bec54372a95bbc0.jpg",
    },
    // ... các sản phẩm khác
  ],
  reducers: {
    // Không cần action creators vì Redux Toolkit tự động tạo ra cho bạn
  },
});

export const selectProducts = (state) => state.products;
export default productsSlice.reducer;
