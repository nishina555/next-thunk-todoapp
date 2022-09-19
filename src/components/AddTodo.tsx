import React, { useState } from "react";
import { postTodo } from "../reducers/todosSlice";
import { useDispatch } from "react-redux";
import styles from "./AddTodo.module.css";

const AddTodo: React.FC = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const updateInput = (input: string) => {
    setInput(input);
  };

  const handleAddTodo = () => {
    dispatch(postTodo(input));
    setInput("");
  };
  return (
    <div>
      <input
        className={styles.input}
        onChange={(e) => updateInput(e.target.value)}
        value={input}
      />
      <button className={styles.addTodo} onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
