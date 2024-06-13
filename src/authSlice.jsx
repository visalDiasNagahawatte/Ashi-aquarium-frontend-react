// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: !!localStorage.getItem("isLoggedIn"), // Get the initial value from local storage if it exists
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      // Perform login logic here, set isLoggedIn to true and set the user object
      state.isLoggedIn = true;
      state.user = action.payload;

      // Store isLoggedIn in local storage
      localStorage.setItem("isLoggedIn", true);
    },
    logout(state) {
      // Perform logout logic here, set isLoggedIn to false and clear the user object
      state.isLoggedIn = false;
      state.user = null;
      // Clear isLoggedIn from local storage
      localStorage.removeItem("isLoggedIn");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
