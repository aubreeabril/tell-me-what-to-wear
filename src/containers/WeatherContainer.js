import React, { Component } from "react";
import CurrentWeather from "../components/CurrentWeather";
import loading from "../components/loading.svg";

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
    const style = {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      height: "100vh",
      width: "100vw",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "white"
    };

    return (
      <div>
        {this.state.latitude ? (
          <CurrentWeather
            lat={this.state.latitude}
            lon={this.state.longitude}
          />
        ) : (
          <img src={loading} alt="loading" style={style} />
        )}
      </div>
    );
  }
}

export default WeatherContainer;
