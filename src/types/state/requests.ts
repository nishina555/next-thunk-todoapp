import { RequestStatus } from "../constants/requestStatusType";

export type RequestStatusType =
  typeof RequestStatus[keyof typeof RequestStatus];

type Response = {
  status: RequestStatusType;
};

export type RequestState = {
  [typePrefix: string]: Response;
};
