export interface TodoState {
  todoItems: Array<TodoItem>;
}

export interface TodoItem {
  id: number;
  content: string;
  completed: boolean;
}
