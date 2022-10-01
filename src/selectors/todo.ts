import { VisibilityFilterTypes } from "../types/state/visibilityFilter";
import { TodoState, TodoEntity } from "../types/state/todos";
import { VisibilityFilters } from "../types/constants/visibilityFilterType";

export const selectTodosByVisibilityFilter = (
  todos: TodoState,
  visibilityFilter: VisibilityFilterTypes
): TodoEntity[] => {
  const allTodos = todos.todoItems;
  switch (visibilityFilter) {
    case VisibilityFilters.Completed:
      return allTodos.filter((todo) => todo.completed);
    case VisibilityFilters.Incomplete:
      return allTodos.filter((todo) => !todo.completed);
    case VisibilityFilters.All:
    default:
      return allTodos;
  }
};
