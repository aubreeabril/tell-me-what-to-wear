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
          <ListItem>
            <div className="list-item__left">
              {this.props.items.top === "Short Sleeves" ? (
                <img
                  src="https://static.thenounproject.com/png/1038958-200.png"
                  alt="short sleeves"
                  style={{ marginRight: "5px" }}
                />
              ) : null}
              {this.props.items.top === "Singlet" ? (
                <img
                  src="https://static.thenounproject.com/png/1642418-200.png"
                  alt="singlet"
                  style={{ marginRight: "5px" }}
                />
              ) : null}
              {this.props.items.top === "Long sleeves" ? (
                <img
                  src="https://static.thenounproject.com/png/1790087-200.png"
                  alt="long sleeves"
                  style={{ marginRight: "5px" }}
                />
              ) : null}
              {this.props.items.top}
            </div>
          </ListItem>
          <ListItem>
            <div className="list-item__left">
              {this.props.items.bottom === "Shorts" ? (
                <img
                  src="https://static.thenounproject.com/png/289508-200.png"
                  alt="shorts"
                  style={{ marginRight: "5px" }}
                />
              ) : null}
              {this.props.items.bottom === "Leggings" ? (
                <img
                  src="https://static.thenounproject.com/png/205431-200.png"
                  alt="leggings"
                  style={{ marginRight: "5px" }}
                />
              ) : null}
              {this.props.items.bottom}
            </div>
          </ListItem>
          <ListItem>
            <div className="list-item__left">
              <img
                src="https://static.thenounproject.com/png/1200375-200.png"
                alt="shoes"
                style={{ marginRight: "5px" }}
              />
              {this.props.items.shoes}
            </div>
          </ListItem>
          {this.props.items.hat ? (
            <ListItem>
              <div className="list-item__left">
                <img
                  src="https://static.thenounproject.com/png/728635-200.png"
                  alt="hat"
                />
                {this.props.items.hat}
              </div>
            </ListItem>
          ) : null}
          {this.props.items.jacket ? (
            <ListItem>
              <div className="list-item__left">
                <img
                  src="https://static.thenounproject.com/png/726299-200.png"
                  alt="jacket"
                />
                {this.props.items.jacket}
              </div>
            </ListItem>
          ) : null}
        </List>
      </div>
    );
  }
}

export default Gear;
