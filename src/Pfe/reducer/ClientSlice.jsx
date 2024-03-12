import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { value: [], isLoading: null, err: null };
// Async thunk for get alltPgetClients
export const getClients = createAsyncThunk("client/getClient", async (log, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const resp = await axios.get("http://localhost:3001/Clients");
      console.log(resp);
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  });
// Async thunk for adding a new client
export const addClient = createAsyncThunk("client/addClient", async (newClient, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const resp = await axios.post("http://localhost:3001/Clients", newClient);
      console.log(resp);
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  });
  
  const clientSlice = createSlice({
    name: "client",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getClients.pending, (state, action) => {
          state.value = [];
          state.isLoading = true;
        })
        .addCase(getClients.fulfilled, (state, action) => {
          state.value = action.payload;
          state.isLoading = false;
        })
        .addCase(getClients.rejected, (state, action) => {
          state.err = action.payload;
          state.isLoading = false;
        })
    
        .addCase(addClient.fulfilled, (state, action) => {
            state.value.push(action.payload);
          })
    },
  });
  
  export default clientSlice.reducer;
  