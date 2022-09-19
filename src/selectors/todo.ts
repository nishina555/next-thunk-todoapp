import { VisibilityFilterTypes } from "../types/state/visibilityFilter";
import { TodoState, TodoItem } from "../types/state/todos";
import { VISIBILITY_FILTERS } from "../types/constants/visibilityFilterType";

export const getTodosByVisibilityFilter = (
  todos: TodoState,
  visibilityFilter: VisibilityFilterTypes
): Array<TodoItem> => {
  const allTodos = todos.todoItems;
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter((todo) => todo.completed);
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter((todo) => !todo.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
};
