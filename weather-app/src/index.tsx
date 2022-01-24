import React from "react";
import ReactDOM from "react-dom";
import "../src/index.css";
import { Geolocation } from "./interface/geoLocation.interface";
import SeasonDisplay from "./Season-Display/SeasonDisplay";

class App extends React.Component {
  state: Geolocation = { latitude: 0, longitude: 0, errorMessage: null };
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
        <SeasonDisplay
          latitude={this.state.latitude}
          longitude={this.state.longitude}
        />
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
