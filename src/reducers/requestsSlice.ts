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
    builder.addMatcher(
      (action) => action.type.startsWith(`${getTodos.typePrefix}/`),
      (state, action) => {
        switch (action.meta.requestStatus) {
          case "pending":
            {
              state[getTodos.typePrefix] = {
                status: RequestStatus.Request,
              };
            }
            break;
          case "fulfilled":
            {
              state[getTodos.typePrefix] = {
                status: RequestStatus.Success,
              };
            }
            break;
          case "rejected":
            {
              state[getTodos.typePrefix] = {
                status: RequestStatus.Failure,
              };
            }
            break;
        }
      }
    );
  },
});

export default requestSlice.reducer;
