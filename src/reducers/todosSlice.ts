import { createSlice } from "@reduxjs/toolkit";
import { buildEntities } from "../lib/entitiesBuilder";
import { Entities } from "../types/state/base";
import { TodoEntity } from "../types/state/todos";
import { createAsyncThunk } from "@reduxjs/toolkit";
import TodosApiService, { PostTodoParams } from "../api/todos";
import { AppState } from "../store/index";

export const getTodos = createAsyncThunk<TodoEntity[]>("getTodos", async () => {
  const todo = await TodosApiService.getAll();
  return todo;
});

export const postTodo = createAsyncThunk<
  TodoEntity,
  string,
  {
    state: AppState;
  }
>("postTodo", async (content) => {
  const todoParams: PostTodoParams = {
    content: content,
    completed: false,
  };
  const todo = await TodosApiService.post(todoParams);
  return todo;
});

export const patchTodo = createAsyncThunk<TodoEntity, TodoEntity>(
  "patchTodo",
  async (todo) => {
    const responsedTodo = await TodosApiService.toggle(todo);
    return responsedTodo;
  }
);

const initialState: Entities<TodoEntity> = {
  allIds: [],
  byId: {},
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodos.fulfilled, (state, action) => {
      const { allIds, byId } = buildEntities<TodoEntity>(action.payload);
      state.allIds = allIds;
      state.byId = byId;
    });
    builder.addCase(postTodo.fulfilled, (state, action) => {
      const todo = action.payload;
      state.allIds.push(todo.id);
      state.byId[todo.id] = todo;
    });
    builder.addCase(patchTodo.fulfilled, (state, action) => {
      const todo = action.payload;
      state.byId[todo.id] = todo;
    });
  },
});

export default todosSlice.reducer;
