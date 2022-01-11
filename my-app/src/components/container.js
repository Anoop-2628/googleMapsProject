import { connect } from "react-redux";
import { selectedOption } from "../Actions/googleMaps";
import { GoogleMapsComp } from "./GoogleMap";

export const mapStateToProps = (state) => {
  return {
    lat: state.mapsData.lat,
    lang: state.mapsData.lang,
    address: state.mapsData.address,
  };
};

export const mapDispatchToProps = {
  selectedOption: selectedOption,
};

export const GoogleMapsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleMapsComp);
