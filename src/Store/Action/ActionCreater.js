import {FORM_INPUT_HANDLER, FORM_CHILD_INPUT_HANDLER } from "./ActionTypes";

export const formInputActionCreater = (data) => {
  return {
    type: FORM_INPUT_HANDLER,
    payload: data,
  };
};

export const formInputActionCreater_2 = (data) => {
  return {
    type: FORM_CHILD_INPUT_HANDLER,
    payload: data,
  };
};

