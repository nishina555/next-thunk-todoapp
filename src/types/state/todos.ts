export type TodoEntity = {
  id: number;
  content: string;
  completed: boolean;
};

export interface TodoState {
  todoItems: Array<TodoEntity>;
}

// export interface TodoItem {
//   id: number;
//   content: string;
//   completed: boolean;
// }
