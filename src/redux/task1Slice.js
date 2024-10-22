import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchActivationCode } from "./activationCodeSlice";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

export const fetchUsersData = createAsyncThunk(
  "task1/fetchUserData",
  async (_, { getState }) => {
    const state = getState();
    const activationCode = state.activationCodeSlice.activationCode;

    const response = await axios.post(
      "https://api.findofficers.com/hiring_test/get_all_employee",
      activationCode
    );

    return response.data;
  }
);

export const task1Slice = createSlice({
  name: "task1Slice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsersData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsersData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default task1Slice.reducer;
