import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.log(error);
  }
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, actions) => {
      state.isLoading = false;
      state.data = actions.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, actions) => {
      console.log("Error: ", actions.payload);
      state.isError = true;
    });
  },
});

export const productSliceAction = productSlice.actions;

export default productSlice;
