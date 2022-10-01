import React, { useEffect } from "react";
import Todo from "./Todo";
import { TodoEntity } from "../types/state/todos";
import { selectTodosByVisibilityFilter } from "../selectors/todo";
import { fetchAllTodos } from "../reducers/todosSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../lib/hooks/useAppDispatch";
import styles from "./TodoList.module.css";

const TodoList: React.FC = () => {
  const dispatch = useAppDispatch();
  const todos: TodoEntity[] = useSelector(selectTodosByVisibilityFilter);

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, [dispatch]);

  return (
    <ul className={styles.todoList}>
      {todos && todos.length
        ? todos.map((todo: TodoEntity, _) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        : "No todos, yay!"}
    </ul>
  );
};

export default TodoList;
