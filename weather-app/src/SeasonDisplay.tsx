import React from "react";
import { Geolocation } from "./interface/geoLocation.interface";

class SeasonDisplay extends React.Component<Geolocation> {
  season: string = "";
  render(): React.ReactNode {
    this.season = this.getSeason(
      { latitude: this.props.latitude, longitude: this.props.longitude },
      new Date().getMonth()
    );
    return (
      <div>
        <span>{this.season}</span>
      </div>
    );
  }

  /**
   * Get's current location and month
   * @param location Geolocation
   * @param month number
   * @returns void
   */
  getSeason(location: Geolocation, month: number) {
    if (month > 2 && month < 9) {
      return location.latitude > 0 ? "summer" : "winter";
    } else {
      return location.latitude > 0 ? "winter" : "summer";
    }
  }
}

export default SeasonDisplay;
