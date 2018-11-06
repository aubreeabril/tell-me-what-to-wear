import React, { Component } from "react";
import {
  // OPEN_WEATHER_MAP_KEY,
  WEATHER_UNLOCKED_APP_ID,
  WEATHER_UNLOCKED_API_KEY
} from "../key";
import { Card } from "react-onsenui";
import Temp from "./Temp";
import WhatToWear from "./WhatToWear";
import loading from "./loading.svg";

class CurrentWeather extends Component {
  state = {
    weatherData: null
  };

  componentDidMount() {
    fetch(
      `http://api.weatherunlocked.com/api/current/${this.props.lat},${
        this.props.lon
      }?app_id=${WEATHER_UNLOCKED_APP_ID}&app_key=${WEATHER_UNLOCKED_API_KEY}`
    )
      .then(r => r.json())
      .then(json => {
        console.log(json);
        this.setState({ weatherData: json });
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
      <React.Fragment>
        {this.state.weatherData ? (
          <React.Fragment>
            <Card material>
              <Temp
                fahrenheit={this.state.weatherData.temp_f}
                weatherData={this.state.weatherData}
              />
              <h3 className="centered">{this.state.weatherData.wx_desc}</h3>
              <h3 className="centered">
                Feels Like: {Math.round(this.state.weatherData.feelslike_f)}
              </h3>

              <Card className="gray-card">
                <div className="centered footer">
                  <i className="wi wi-strong-wind" />
                  {this.state.weatherData.windspd_mph}
                  mph | <i className="wi wi-humidity" />
                  {this.state.weatherData.humid_pct}%
                </div>
              </Card>
            </Card>
            <WhatToWear weatherData={this.state.weatherData} />
          </React.Fragment>
        ) : (
          <img src={loading} alt="loading" style={style} />
        )}
      </React.Fragment>
    );
  }
}

export default CurrentWeather;
