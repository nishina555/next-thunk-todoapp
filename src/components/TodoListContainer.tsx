import { FC, useEffect } from "react";
import { TodoEntity } from "../types/state/todos";
import { selectTodosByVisibilityFilter } from "../selectors/todo";
import { getTodos } from "../reducers/todosSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../lib/hooks/useAppDispatch";
import { TodoList } from "./TodoList";

export const TodoListContainer: FC = () => {
  const dispatch = useAppDispatch();
  const todos: TodoEntity[] = useSelector(selectTodosByVisibilityFilter);
  console.info(todos);

  console.info("render");
  useEffect(() => {
    console.info("mount");
    dispatch(getTodos());
    return () => console.info("unmount");
  }, [dispatch]);

  return <TodoList todos={todos} />;
};
