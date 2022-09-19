import React, { useEffect } from "react";
import Todo from "./Todo";
import { TodoItem } from "../types/state/todos";
import { getTodosByVisibilityFilter } from "../selectors/todo";
import { RootState } from "../store/index";
import { fetchAllTodos } from "../reducers/todosSlice";
import { useSelector, useDispatch } from "react-redux";
import styles from "./TodoList.module.css";

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const todos: TodoItem[] = useSelector((state: RootState) => {
    const todos = state.todos;
    const { visibilityFilter } = state;
    return getTodosByVisibilityFilter(todos, visibilityFilter);
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
