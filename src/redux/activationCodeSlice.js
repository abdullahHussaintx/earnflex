import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
  activationCode: null,
};

export const fetchActivationCode = createAsyncThunk(
  "task1/fetchActivationCode",
  async () => {
    const response = await axios.post(
      "https://api.findofficers.com/hiring_test/get_activation_code"
    );
    return response.data;
  }
);

export const activationCodeSlice = createSlice({
  name: "activationCodeSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchActivationCode.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchActivationCode.fulfilled, (state, action) => {
        state.loading = false;
        state.activationCode = action.payload;
      })
      .addCase(fetchActivationCode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default activationCodeSlice.reducer;
