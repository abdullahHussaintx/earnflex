import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navOpen: false,
};

export const navBarSlice = createSlice({
  name: "navBarSlice",
  initialState,
  reducers: {
    handleNavBar: (state) => {
      state.navOpen = !state.navOpen;
    },
  },
});

export const { handleNavBar } = navBarSlice.actions;
export default navBarSlice.reducer;
