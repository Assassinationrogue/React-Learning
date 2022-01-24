import React from "react";
import { Geolocation } from "../interface/geoLocation.interface";
import './season.css';

class SeasonDisplay extends React.Component<Geolocation> {
  season: string = "";
  render(): React.ReactNode {
    this.season = this.getSeason(
      { latitude: this.props.latitude, longitude: this.props.longitude },
      new Date().getMonth()
    );
    return (
      <div>
        <i className="huge snowflake icon"></i>
        <h2 className="winterText">Brr.. it's so chilly</h2>

        <i className="huge snowflake icon"></i>
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
