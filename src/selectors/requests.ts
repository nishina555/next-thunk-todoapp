import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { RequestStatus } from "../types/constants/requestStatusType";
import { RequestState } from "../types/state/requests";

const selectRequests = (state: AppState): RequestState => state.requests;

const selectRequest = (actionType: string) =>
  createSelector([selectRequests], (requests) => requests[actionType] || {});

// リクエストの状態を取得
const selectRequestStatus = (actionType: string) =>
  createSelector([selectRequest(actionType)], (request) => request?.status);

// リクエスト中の場合trueを返す
export const selectHasRequestStarted = (actionType: string) =>
  createSelector(
    [selectRequest(actionType)],
    (request) => request?.status === RequestStatus.Request
  );

// リクエスト成功の場合trueを返す
export const selectHasRequestSucceeded = (actionType: string) =>
  createSelector(
    [selectRequest(actionType)],
    (request) => request?.status === RequestStatus.Success
  );

// リクエスト失敗の場合trueを返す
export const selectHasRequestFailed = (actionType: string) =>
  createSelector(
    [selectRequest(actionType)],
    (request) => request?.status === RequestStatus.Failure
  );

// リクエスト未完了（未実行、実行中）の場合trueを返す
export const selectHasRequestNotDone = (actionType: string) =>
  createSelector(
    [selectRequest(actionType)],
    (request) =>
      request?.status === RequestStatus.Request || request?.status === undefined
  );

// リクエスト完了の場合trueを返す（リクエストの成否は問わない）
export const selectHasRequestDone = (actionType: string) =>
  createSelector([selectRequest(actionType)], (request) => {
    const complatedRequestStatuses = [
      RequestStatus.Failure,
      RequestStatus.Success,
    ];
    return complatedRequestStatuses.some((status) =>
      [request.status].includes(status)
    );
  });
