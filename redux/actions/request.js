import * as request_types from "../action-types/request";

export const isRequesting = () => ({
  type: request_types.IsRequesting,
});

export const isRequested = (messages) => ({
  type: request_types.IsRequested,
  payload: messages,
});

export const errorOccurred = () => ({
  type: request_types.ErrorOccurred,
});