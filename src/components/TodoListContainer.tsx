import { FC, useEffect } from "react";
import { TodoEntity } from "../types/state/todos";
import { selectTodosByVisibilityFilter } from "../selectors/todo";
import { getTodos } from "../reducers/todosSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../lib/hooks/useAppDispatch";
import { TodoList } from "./TodoList";
import { selectHasRequestCompleted } from "../selectors/requests";
import { Loading } from "./shared/Loading";

export const TodoListContainer: FC = () => {
  const dispatch = useAppDispatch();
  const todos: TodoEntity[] = useSelector(selectTodosByVisibilityFilter);
  const hasRequestCompleted = useSelector(
    selectHasRequestCompleted(getTodos.typePrefix)
  );
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return hasRequestCompleted ? <TodoList todos={todos} /> : <Loading />;
  // return <TodoList todos={todos} />;
};
