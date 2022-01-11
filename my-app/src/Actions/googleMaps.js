import { SELECTED_OPTION } from "../ActionConstants";

export const selectedOption = (payload) => {
  return {
    type: SELECTED_OPTION,
    payload: payload,
  };
};
