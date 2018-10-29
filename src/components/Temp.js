import React, { Component } from "react";

const Temp = props => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        {Math.round(props.fahrenheit)}
        °F
      </h1>
    </div>
  );
};

export default Temp;
