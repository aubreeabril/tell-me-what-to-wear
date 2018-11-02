import React, { Component } from "react";
import { rainCodes } from "../constants/WeatherCodes";

class WhatToWear extends Component {
  state = {
    top: null,
    bottom: null,
    hat: null,
    jacket: null,
    shoes: null
  };

  componentDidMount() {
    if (rainCodes.includes(this.props.weatherData.wx_code)) {
      this.setState = {
        hat: "Hat with visor to keep blowing rain or snow off your face."
      };
    }
  }

  render() {
    return (
      <div>
        <h1>What to wear</h1>
      </div>
    );
  }
}

export default WhatToWear;
