import {
  ActionReducerMapBuilder,
  AsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
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

const requestAsyncThunks = [getTodos];

const createRequestAsyncThunkReducer = (
  builder: ActionReducerMapBuilder<RequestState>,
  targetRequestThunk: AsyncThunk<any, any, any>
) => {
  builder.addMatcher(
    (action) => action.type.startsWith(`${targetRequestThunk.typePrefix}/`),
    (state, action) => {
      switch (action.meta.requestStatus) {
        case "pending": {
          state[targetRequestThunk.typePrefix] = {
            status: RequestStatus.Request,
          };
          break;
        }
        case "fulfilled": {
          state[targetRequestThunk.typePrefix] = {
            status: RequestStatus.Success,
          };
          break;
        }
        case "rejected": {
          state[getTodos.typePrefix] = {
            status: RequestStatus.Failure,
          };
          break;
        }
        default: {
          return;
        }
      }
    }
  );
};

export const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    requestAsyncThunks.forEach((thunk) => {
      createRequestAsyncThunkReducer(builder, thunk);
    });
  },
});

export default requestSlice.reducer;
