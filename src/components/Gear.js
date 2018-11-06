import React, { Component } from "react";
import { List, ListItem, Button } from "react-onsenui";

class Gear extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1 className="centered">Gear</h1>
        <List
          dataSource={[
            this.props.items.top,
            this.props.items.bottom,
            this.props.items.hat,
            this.props.items.shoes,
            this.props.items.jacket
          ]}
        >
          <ListItem>{this.props.items.top}</ListItem>
          <ListItem>{this.props.items.bottom}</ListItem>
          <ListItem>{this.props.items.shoes}</ListItem>
          {this.props.items.hat ? (
            <ListItem>{this.props.items.hat}</ListItem>
          ) : null}
          {this.props.items.jacket ? (
            <ListItem>{this.props.items.jacket}</ListItem>
          ) : null}
        </List>
      </div>
    );
  }
}

export default Gear;
