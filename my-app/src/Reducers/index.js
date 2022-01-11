import { combineReducers } from "redux";
import { GoogleMapsReducer } from "./googleMaps";
export const Reducers = combineReducers({
  mapsData: GoogleMapsReducer,
});
