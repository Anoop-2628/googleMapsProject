import React, { Component } from "react";
import { GoogleMapsContainer } from "./container";

export class GoogleMapsSec extends Component {
  render() {
    return (
      <div style={{ margin: "100px" }}>
        <GoogleMapsContainer
          google={this.props.google}
          center={{ lat: 18.5204, lng: 73.8567 }}
          height="500px"
          zoom={15}
        />
      </div>
    );
  }
}
