import { SELECTED_OPTION } from "../ActionConstants";

export const GoogleMapsReducer = (state = {}, action) => {
  switch (action.type) {
    case SELECTED_OPTION: {
      return {
        lat: action.payload.lat,
        lang: action.payload.lang,
        address: action.payload.address,
      };
    }
    default:
      return state;
  }
};
