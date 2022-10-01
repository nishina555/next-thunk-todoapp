import { createSlice } from "@reduxjs/toolkit";
import { VisibilityFilters } from "../types/constants/visibilityFilterType";
import { VisibilityFilterTypes } from "../types/state/visibilityFilter";

const initialState: VisibilityFilterTypes = VisibilityFilters.All;

const visibilityFilterSlice = createSlice({
  name: "visibilityFilter",
  initialState,
  reducers: {
    setFilter(state, action) {
      return action.payload;
    },
  },
});

export const { setFilter } = visibilityFilterSlice.actions;
export default visibilityFilterSlice.reducer;
