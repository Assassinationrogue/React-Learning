import React from "react";
import { FC } from "react";
import { Geolocation } from "./interface/geoLocation.interface";

class SeasonDisplay extends React.Component<Geolocation> {
  render(): React.ReactNode {
    return (
      <div>
        <div>Latitiude: {this.props.latitude}</div>
        <div>Longitude: {this.props.longitude}</div>
      </div>
    );
  }
}

export default SeasonDisplay;
