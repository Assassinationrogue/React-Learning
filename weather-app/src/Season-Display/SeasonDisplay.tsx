import React from "react";
import { Geolocation } from "../interface/geoLocation.interface";
import "./season.css";

class SeasonDisplay extends React.Component<Geolocation> {
  season: string = "";
  render(): React.ReactNode {
    this.season = this.getSeason(
      { latitude: this.props.latitude, longitude: this.props.longitude },
      new Date().getMonth()
    );
    console.log(this.season);
    if (this.season === "winter") {
      return (
        <div>
          <i className="huge snowflake icon flk-clr"></i>
          <h2 className="season-text">Brr.. it's so chilly</h2>

          <i
            className=" down-flake huge snowflake icon  flk-clr"
            style={{ display: "block" }}
          ></i>
        </div>
      );
    } else if (this.season === "summer") {
      return (
        <div>
          <i className="huge sun icon sun-clr"></i>
          <h2 className="season-text">Head to the beach!</h2>

          <i className="huge sun icon down-flake sun-clr"></i>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
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
