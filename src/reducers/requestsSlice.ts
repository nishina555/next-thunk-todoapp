import { createSlice } from "@reduxjs/toolkit";
import { getTodos } from "./todosSlice";

const initialState = {
  getTodos: {
    status: "request",
  },
};

export const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state["getTodos"] = {
        status: "fullfilled",
      };
    });
  },
});

export default requestSlice.reducer;
