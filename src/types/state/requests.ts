import { RequestStatus } from "../constants/requestStatusType";

export type RequestStatusType =
  typeof RequestStatus[keyof typeof RequestStatus];
