import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  modalOpen: false,
  loading: false,
  error: null,
  response: "",
};

export const submitEmployeeData = createAsyncThunk(
  "employees/submit",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://api.findofficers.com/hiring_test/add_employee",
        formData
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const task3Slice = createSlice({
  name: "task3Slice",
  initialState,
  reducers: {
    openModal: (state) => {
      state.modalOpen = true;
    },
    closeModal: (state) => {
      state.modalOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitEmployeeData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitEmployeeData.fulfilled, (state, action) => {
        state.loading = false;
        state.response = action.payload;
        console.log(action.payload);
      })
      .addCase(submitEmployeeData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { openModal, closeModal } = task3Slice.actions;
export default task3Slice.reducer;
