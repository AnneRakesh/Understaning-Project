
import {
  FORM_CHILD_INPUT_HANDLER,
  FORM_INPUT_HANDLER,
} from "../Action/ActionTypes";

const initialState = {
  firstName: "",
  lastName: "",
  Age: "",
  userId: "",
  password: "",
  address: {
    laneNo: "",
    roadNO: "",
    colony: "",
    pinCode: "",
    country: "",
  },
  parentsDetails: {
    fatherName: "",
    motherName: "",
    guardianName: "",
  },
  habits: {
    smoking: false,
    alcohol: false,
  },
};

export const reducer_1 = (state = initialState, Action) => {
  const { type, payload } = Action;

  switch (type) {
    case FORM_INPUT_HANDLER:
      return {
        ...state,
        [payload.name]: payload.value,
      };
    case FORM_CHILD_INPUT_HANDLER:
      return {
        ...state,
        [payload.child]: {
            ...state[payload.child], [payload.name]:payload.value
        },
      };

    default: return state;
  }
};
