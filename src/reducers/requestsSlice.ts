import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { RequestStatus } from "../types/constants/requestStatusType";
import { RequestStatusType } from "../types/state/requests";
import { getTodos } from "./todosSlice";

type Response = {
  status: RequestStatusType;
};

type RequestState = {
  [typePrefix: string]: Response;
};

const initialState = {};

export const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<RequestState>) => {
    builder.addCase(getTodos.pending, (state, action) => {
      state["getTodos"] = {
        status: RequestStatus.Request,
      };
    });
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state["getTodos"] = {
        status: RequestStatus.Success,
      };
    });
    builder.addCase(getTodos.rejected, (state, action) => {
      state["getTodos"] = {
        status: RequestStatus.Failure,
      };
    });
  },
});

export default requestSlice.reducer;
