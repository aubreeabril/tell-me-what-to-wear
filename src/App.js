import React, { Component } from "react";
import { Page } from "react-onsenui";
import WeatherContainer from "./containers/WeatherContainer";

class App extends Component {
  render() {
    return (
      <Page
        contentStyle={{
          padding: 20
        }}
      >
        <WeatherContainer />
      </Page>
    );
  }
}

export default App;
