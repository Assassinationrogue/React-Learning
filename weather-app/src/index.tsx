import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  constructor(props: JSX.Element) {
    super(props);
    this.state = {lat: null};
  }
  render(): React.ReactNode {
    window.navigator.geolocation.getCurrentPosition((position) => {
    //   [
    //     {
    //       Latitude: position.coords.latitude,
    //       Longitude: position.coords.longitude,
    //     },
    //   ];
    });

    return <div>Latitude: {}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
