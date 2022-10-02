import { FC } from "react";
import Todo from "./Todo";
import { TodoEntity } from "../types/state/todos";
import styles from "./TodoList.module.css";

type Props = {
  todos: TodoEntity[];
};

export const TodoList: FC<Props> = ({ todos }) => {
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
