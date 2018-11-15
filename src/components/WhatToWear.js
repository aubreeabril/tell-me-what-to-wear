import React, { Component } from "react";
import { rainCodes } from "../constants/WeatherCodes";
import Gear from "./Gear";

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
      } else if (this.props.weatherData.temp_f > 38) {
        this.setState({
          top: "Long Sleeves",
          hat: "Hat with visor to keep blowing rain or snow off your face.",
          bottom: "Leggings",
          shoes: "Running shoes with moisture wicking socks"
        });
      } else {
        this.setState({
          top: "Long Sleeves",
          hat: "Hat with visor to keep blowing rain or snow off your face.",
          bottom: "Leggings",
          shoes:
            "Running shoes with moisture wicking socks. It's freezing. Try two pairs of socks, one made of a good wicking material and also a warm one.",
          jacket: `It's cold and raining, wear a breathable jacket. Windbreakers are great`
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
      } else if (this.props.weatherData.temp_f > 35) {
        this.setState({
          top: "Long Sleeves",
          bottom: "Leggings",
          shoes: "Running shoes with moisture wicking socks"
        });
      } else {
        this.setState({
          top: "Long Sleeves",
          bottom: "Leggings",
          shoes: "Running shoes with moisture wicking socks.",
          jacket: "Light Jacket to protect you from the wind",
          gloves: "If you get too warm you can tuck them into your waistband!"
        });
      }
    }
  }

  render() {
    return <div>{this.state ? <Gear items={this.state} /> : null}</div>;
  }
}

export default WhatToWear;
