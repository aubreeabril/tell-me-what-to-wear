import React, { Component } from "react";
import {
  // OPEN_WEATHER_MAP_KEY,
  WEATHER_UNLOCKED_APP_ID,
  WEATHER_UNLOCKED_API_KEY
} from "../key";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Temp from "./Temp";
import WhatToWear from "./WhatToWear";

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
    return (
      <React.Fragment>
        <Card className="main-card">
          <CardContent>
            {this.state.weatherData ? (
              <React.Fragment>
                <Temp
                  fahrenheit={this.state.weatherData.temp_f}
                  weatherData={this.state.weatherData}
                />
                <h3 className="centered">{this.state.weatherData.wx_desc}</h3>
                <div className="centered">
                  <i className="wi wi-strong-wind" />
                  {this.state.weatherData.windspd_mph}
                  mph | <i className="wi wi-humidity" />
                  {this.state.weatherData.humid_pct}% | Feels like:{" "}
                  {this.state.weatherData.feelslike_f}
                  °F
                </div>
              </React.Fragment>
            ) : (
              "Loading ..."
            )}
          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
}

export default CurrentWeather;
