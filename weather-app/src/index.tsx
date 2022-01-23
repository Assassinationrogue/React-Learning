import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => {
      console.table([
        {
          Latitude: position.coords.latitude,
          Longitude: position.coords.longitude,
        },
      ]);
    },
    (error) => {
      console.error(error);
    }
  );
  return <h1>Hi there</h1>;
};

ReactDOM.render(<App />, document.getElementById("root"));
