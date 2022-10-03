import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { RequestStatus } from "../types/constants/requestStatusType";
import { RequestState } from "../types/state/requests";

const selectRequests = (state: AppState): RequestState => state.requests;

const selectRequest = (actionType: string) =>
  createSelector([selectRequests], (requests) => requests[actionType] || {});

// 非同期処理の実行状況を取得するSelector
export const selectRequestStatus = (actionType: string) =>
  createSelector([selectRequest(actionType)], (request) => request?.status);

// 実行完了（成功もしくは失敗）の場合trueを返すSelector
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
