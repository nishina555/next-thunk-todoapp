import { combineReducers, configureStore } from "@reduxjs/toolkit";
import requestReducer from "../reducers/requestsSlice";
import todosReducer from "../reducers/todosSlice";
import visibilityFilterReducer from "../reducers/visibilityFilterSlice";

const store = configureStore({
  reducer: {
    entities: combineReducers({
      todos: todosReducer,
    }),
    ui: combineReducers({
      visibilityFilter: visibilityFilterReducer,
    }),
    requests: requestReducer,
  },
});

export default store;

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
