import React, { Component } from "react";
import { Page, Toolbar, Icon } from "react-onsenui";
import WeatherContainer from "./WeatherContainer";

class MainPage extends Component {
  render() {
    return (
      <Page
        contentStyle={{
          padding: 20
        }}
        renderToolbar={() => (
          <Toolbar>
            <div className="center">
              <Icon icon="fa-running" /> Tell Me What To Wear
            </div>
          </Toolbar>
        )}
      >
        <WeatherContainer />
      </Page>
    );
  }
}

export default MainPage;
