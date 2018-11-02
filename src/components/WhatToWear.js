import React, { Component } from "react";
import { rainCodes } from "../constants/WeatherCodes";
import Outfit from "./Outfit";

class WhatToWear extends Component {
  // state = {
  //   top: null,
  //   bottom: null,
  //   hat: null,
  //   jacket: null,
  //   shoes: null
  // };

  componentDidMount() {
    if (rainCodes.includes(this.props.weatherData.wx_code)) {
      if (this.props.weatherData.temp_f > 60) {
        this.setState({
          top: "Singlet",
          hat: "Hat with visor to keep blowing rain or snow off your face.",
          bottom: "Shorts",
          shoes: "Running shoes with moisture wicking socks"
        });
      } else if (this.props.weatherData.temp_f > 50) {
        this.setState({
          top: "Short Sleeves",
          hat: "Hat with visor to keep blowing rain or snow off your face.",
          bottom: "Leggings",
          shoes: "Running shoes with moisture wicking socks"
        });
      } else {
        this.setState({
          top: "Long Sleeves",
          hat: "Hat with visor to keep blowing rain or snow off your face.",
          bottom: "Leggings",
          shoes: "Running shoes with moisture wicking socks"
        });
      }
    }
    if (!rainCodes.includes(this.props.weatherData.wx_code)) {
      if (this.props.weatherData.temp_f > 80) {
        this.setState({
          top: "Singlet",
          bottom: "Shorts",
          shoes: "Running shoes with moisture wicking socks"
        });
      } else if (this.props.weatherData.temp_f > 50) {
        this.setState({
          top: "Short Sleeves",
          bottom: "Shorts",
          shoes: "Running shoes with moisture wicking socks"
        });
      } else {
        this.setState({
          top: "Long Sleeves",
          bottom: "Leggings",
          shoes: "Running shoes with moisture wicking socks"
        });
      }
    }
  }

  render() {
    return (
      <div>
        <h1>What to wear</h1>
        {this.state ? <Outfit items={this.state} /> : null}
      </div>
    );
  }
}

export default WhatToWear;
