import { FC, useEffect } from "react";
import { TodoEntity } from "../types/state/todos";
import { selectTodosByVisibilityFilter } from "../selectors/todo";
import { getTodos } from "../reducers/todosSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../lib/hooks/useAppDispatch";
import { TodoList } from "./TodoList";
// import { selectHasRequestDone } from "../selectors/requests";
import { selectRequestStatus } from "../selectors/requests";
import { Loading } from "./shared/Loading";
import { Failure } from "./shared/Failure";
import { RequestStatus } from "../types/constants/requestStatusType";

export const TodoListContainer: FC = () => {
  const dispatch = useAppDispatch();
  const todos: TodoEntity[] = useSelector(selectTodosByVisibilityFilter);
  // const hasRequestDone = useSelector(
  //   selectHasRequestDone(getTodos.typePrefix)
  // );
  const requestStatus = useSelector(selectRequestStatus(getTodos.typePrefix));

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  if (requestStatus === RequestStatus.Failure) return <Failure />;

  return requestStatus === RequestStatus.Success ? (
    <TodoList todos={todos} />
  ) : (
    <Loading />
  );
};
