import React, { Component } from "react";
import WeatherContainer from "./containers/WeatherContainer";

class App extends Component {
  render() {
    return (
      <div style={{ padding: "20px" }}>
        <WeatherContainer />
      </div>
    );
  }
}

export default App;
