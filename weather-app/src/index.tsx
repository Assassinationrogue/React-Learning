import React from "react";
import ReactDOM from "react-dom";
import "../src/index.css";
import { Geolocation } from "./interface/geoLocation.interface";
class App extends React.Component {
  state: Geolocation = { latitude: null, longitude: null, errorMessage: null };
  render(): React.ReactNode {
    if (
      this.state.errorMessage &&
      !this.state.latitude &&
      !this.state.longitude
    ) {
      return <div>{this.state.errorMessage}</div>;
    }
    if (
      !this.state.errorMessage &&
      this.state.latitude &&
      this.state.longitude
    ) {
      return (
        <div>
          <span className="location">Latitude: {this.state.latitude}</span>
          <span className="location">Longitude: {this.state.longitude}</span>
        </div>
      );
    }

    return <div>Loading...</div>;
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position?.coords.latitude,
          longitude: position?.coords.longitude,
        });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
