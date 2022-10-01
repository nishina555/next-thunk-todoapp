import React, { useEffect } from "react";
import Todo from "./Todo";
import { TodoItem } from "../types/state/todos";
import { selectTodosByVisibilityFilter } from "../selectors/todo";
import { AppState } from "../store/index";
import { fetchAllTodos } from "../reducers/todosSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../lib/hooks/useAppDispatch";
import styles from "./TodoList.module.css";

const TodoList: React.FC = () => {
  const dispatch = useAppDispatch();
  const todos: TodoItem[] = useSelector((state: AppState) => {
    const todos = state.entities.todos;
    const { visibilityFilter } = state.ui;
    return selectTodosByVisibilityFilter(todos, visibilityFilter);
  });

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, [dispatch]);

  return (
    <ul className={styles.todoList}>
      {todos && todos.length
        ? todos.map((todo: TodoItem, _) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        : "No todos, yay!"}
    </ul>
  );
};

export default TodoList;
