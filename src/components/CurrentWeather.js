import React, { Component } from "react";
import {
  OPEN_WEATHER_MAP_KEY,
  WEATHER_UNLOCKED_APP_ID,
  WEATHER_UNLOCKED_API_KEY
} from "../keys";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Icon from "@material-ui/core/Icon";
import Temp from "./Temp";

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
      .then(json => this.setState({ weatherData: json }));
  }

  render() {
    return (
      <Card>
        <CardContent>
          <h1 style={{ textAlign: "center" }}>Current Weather</h1>
          {this.state.weatherData ? (
            <React.Fragment>
              <i
                style={{ width: "5em" }}
                class={`wi wi-day-${
                  this.state.weatherData.wx_desc.toLowerCase().split(" ")[1]
                }`}
              />
              <Temp
                fahrenheit={this.state.weatherData.temp_f}
                weatherData={this.state.weatherData}
              />
            </React.Fragment>
          ) : (
            "Loading ..."
          )}
        </CardContent>
      </Card>
    );
  }
}

export default CurrentWeather;
