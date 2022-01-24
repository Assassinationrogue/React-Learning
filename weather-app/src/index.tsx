import React from "react";
import ReactDOM from "react-dom";
import "../src/index.css";
import { Geolocation } from "./interface/geoLocation.interface";
import SeasonDisplay from "./Season-Display/SeasonDisplay";
import Loader from "./spinner/spinner";

class App extends React.Component {
  state: Geolocation = { latitude: 0, longitude: 0, errorMessage: null };

  /**
   * Renders content conditionally
   * @param none
   * @returns JSX.element
   */
  private renderContent(): JSX.Element {
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

    return <Loader message="Please accept location" type="" key="" />;
  }

  render(): React.ReactNode {
    return <div>{this.renderContent()}</div>;
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
