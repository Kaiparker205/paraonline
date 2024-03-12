import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { value: [], isLoading: null, err: null };
// Async thunk for get alltPgetProducts
export const getProducts = createAsyncThunk("product/getProduct", async (log, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const resp = await axios.get("http://localhost:3001/Products");
      console.log(resp);
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  });
  const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getProducts.pending, (state, action) => {
          state.value = [];
          state.isLoading = true;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
          state.value = action.payload;
          state.isLoading = false;
        })
        .addCase(getProducts.rejected, (state, action) => {
          state.err = action.payload;
          state.isLoading = false;
        })
    
      
    },
  });
  
  export default productSlice.reducer;
  