import axiosInstance from "./index";
import { TodoEntity } from "../types/state/todos";

export interface PostTodoParams {
  content: string;
  completed: boolean;
}

class Todos {
  static async getAll() {
    const response = await axiosInstance.get(`todos`).catch((error) => {
      throw new Error(error.message);
    });
    return response.data;
  }
  static async post(todo: PostTodoParams) {
    const response = await axiosInstance.post(`todos`, todo).catch((error) => {
      throw new Error(error.message);
    });
    return response.data;
  }
  static async toggle(todo: TodoEntity) {
    let toggledTodo = Object.assign({}, todo, { completed: !todo.completed });
    const data = await this.patch(toggledTodo).catch((error) => {
      throw new Error(error.message);
    });
    return data;
  }

  static async patch(todo: TodoEntity) {
    const response = await axiosInstance
      .patch(`todos/${todo.id}`, todo)
      .catch((error) => {
        throw new Error(error.message);
      });
    return response.data;
  }
  static async delete(todo: TodoEntity) {
    await axiosInstance
      .delete(`todos/${todo.id}`, { data: todo })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
}
export default Todos;
