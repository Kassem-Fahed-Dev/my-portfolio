import React from "react";
import "./LoaderLogo.css";
import logo from "../../assets/images/fullstack.svg";

class LogoLoader extends React.Component {
  render() {
    return (


    <img
      src={logo} // or import and use if it's in src
      alt="Splash Logo"
      className="splash-logo"
      style={{ width: "50vw", height: "auto" }}
    />
  


    );
  }
}

export default LogoLoader;
