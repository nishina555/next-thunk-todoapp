import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { RequestStatus } from "../types/constants/requestStatusType";
import { RequestState } from "../types/state/requests";

const selectRequests = (state: AppState): RequestState => state.requests;

const selectRequest = (actionType: string) =>
  createSelector([selectRequests], (requests) => requests[actionType] || {});

// const selectRequestStatus = (actionType: string) =>
//   createSelector([selectRequests], (requests) => requests[actionType]?.status);

export const hasRequestStarted = (actionType: string) =>
  createSelector(
    [selectRequest(actionType)],
    (request) => request.status !== undefined
  );

export const hasRequestCompleted = (actionType: string) =>
  createSelector([selectRequest(actionType)], (request) => {
    const complatedRequestStatuses = [
      RequestStatus.Failure,
      RequestStatus.Success,
    ];
    return complatedRequestStatuses.some((status) =>
      [request.status].includes(status)
    );
  });
