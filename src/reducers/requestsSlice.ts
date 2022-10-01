import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { RequestStatus } from "../types/constants/requestStatusType";
import { RequestStatusType } from "../types/state/requests";

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
      (action) => action.type.startsWith("getTodos/"),
      (state, action) => {
        console.log(action);
        switch (action.meta.requestStatus) {
          case "pending":
            {
              state["getTodos"] = {
                status: RequestStatus.Request,
              };
            }
            break;
          case "fulfilled":
            {
              state["getTodos"] = {
                status: RequestStatus.Success,
              };
            }
            break;
          case "rejected":
            {
              state["getTodos"] = {
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
