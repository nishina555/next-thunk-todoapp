import React from "react";
import cx from "classnames";
import { TodoEntity } from "../types/state/todos";
import { patchTodo } from "../reducers/todosSlice";
import { useAppDispatch } from "../lib/hooks/useAppDispatch";
import styles from "./Todo.module.css";

interface TodoProps {
  todo: TodoEntity;
}

export const Todo: React.FC<TodoProps> = ({ todo }) => {
  const dispatch = useAppDispatch();
  const handleToggleTodo = (todo: TodoEntity) => {
    dispatch(patchTodo(todo));
  };
  return (
    <li className={styles.todoItem} onClick={() => handleToggleTodo(todo)}>
      {todo && todo.completed ? "👌" : "👋"}{" "}
      <span className={cx(todo && todo.completed && styles.textCompleted)}>
        {todo.content}
      </span>
    </li>
  );
};
