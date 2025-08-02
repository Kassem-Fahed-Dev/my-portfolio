import React, { Component } from "react";
import logo from "../../assets/images/developerActivity.svg";
export default class DesignImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
    <img
      src={logo} // or import and use if it's in src
      alt="Splash Logo"
      className="splash-logo"
      style={{ width: "650px", height: "auto" }}
    />
    );
  }
}
