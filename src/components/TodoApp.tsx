import React from "react";
import { AddTodo } from "./AddTodo";
import { TodoListContainer } from "./TodoListContainer";
import { VisibilityFilter } from "./VisibilityFilter";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoListContainer />
      <VisibilityFilter />
    </div>
  );
}
