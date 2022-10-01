import { TodoEntity } from "../types/state/todos";
import { VisibilityFilters } from "../types/constants/visibilityFilterType";
import { AppState } from "../store";
import { Entities } from "../types/state/base";
import { createSelector } from "@reduxjs/toolkit";
import { selectVisibilityFilter } from "./visibilityFilter";

const selectTodoEntities = (state: AppState): Entities<TodoEntity> =>
  state.entities.todos;

const selectTodoIds = createSelector(
  [selectTodoEntities],
  (todos) => todos.allIds
);

const selectTodosById = createSelector(
  [selectTodoEntities],
  (todos) => todos.byId
);

const selectTodos = createSelector(
  [selectTodoIds, selectTodosById],
  (todoIds, todos) => todoIds.map((id) => todos[id])
);

export const selectTodosByVisibilityFilter = createSelector(
  [selectTodos, selectVisibilityFilter],
  (todos, visibilityFilter) => {
    switch (visibilityFilter) {
      case VisibilityFilters.Completed:
        return todos.filter((todo) => todo.completed);
      case VisibilityFilters.Incomplete:
        return todos.filter((todo) => !todo.completed);
      case VisibilityFilters.All:
      default:
        return todos;
    }
  }
);
