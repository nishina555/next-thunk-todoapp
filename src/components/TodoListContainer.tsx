import { FC, useEffect } from "react";
import { TodoEntity } from "../types/state/todos";
import { selectTodosByVisibilityFilter } from "../selectors/todo";
import { getTodos } from "../reducers/todosSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../lib/hooks/useAppDispatch";
import { TodoList } from "./TodoList";
import { Loading } from "./shared/Loading";
import { RequestStatus } from "../types/constants/requestStatusType";
import { selectRequestStatus } from "../selectors/requests";
import { Failure } from "./shared/Failure";
import { selectHasRequestDone } from "../selectors/requests";

export const TodoListContainer: FC = () => {
  const dispatch = useAppDispatch();
  const todos: TodoEntity[] = useSelector(selectTodosByVisibilityFilter);
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  // パターン1: 実行中と失敗はローディング状態にする
  // const requestStatus = useSelector(selectRequestStatus(getTodos.typePrefix));
  // return requestStatus === RequestStatus.Success ? (
  //   <TodoList todos={todos} />
  // ) : (
  //   <Loading />
  // );

  // パターン2: 実行中はローディング状態、失敗は失敗画面を表示する
  // const requestStatus = useSelector(selectRequestStatus(getTodos.typePrefix));
  // if (requestStatus === RequestStatus.Failure) return <Failure />;
  // return requestStatus === RequestStatus.Success ? (
  //   <TodoList todos={todos} />
  // ) : (
  //   <Loading />
  // );

  // パターン3: 実行中はローディング状態、実行完了（失敗もしくは成功）で画面を表示する
  const hasRequestDone = useSelector(selectHasRequestDone(getTodos.typePrefix));
  return hasRequestDone ? <TodoList todos={todos} /> : <Loading />;
};
