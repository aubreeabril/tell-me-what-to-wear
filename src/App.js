import React, { Component } from "react";
import { Page, Toolbar, ToolbarButton, Icon } from "react-onsenui";
import WeatherContainer from "./containers/WeatherContainer";

class App extends Component {
  render() {
    return (
      <Page
        contentStyle={{
          padding: 20
        }}
        renderToolbar={() => (
          <Toolbar>
            <div className="center">
              <ToolbarButton>
                <Icon icon="fa-running" />
              </ToolbarButton>
              Tell Me What To Wear
            </div>
          </Toolbar>
        )}
      >
        <WeatherContainer />
      </Page>
    );
  }
}

export default App;
