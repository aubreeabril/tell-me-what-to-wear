import React, { Component } from "react";
import CurrentWeather from "../components/CurrentWeather";

class WeatherContainer extends Component {
  state = {
    latitude: null,
    longitude: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        latitude: Math.round(position.coords.latitude),
        longitude: Math.round(position.coords.longitude)
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.latitude ? (
          <CurrentWeather
            lat={this.state.latitude}
            lon={this.state.longitude}
          />
        ) : (
          "Loading ..."
        )}
      </div>
    );
  }
}

export default WeatherContainer;
