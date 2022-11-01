import React from "react";
import logo from "../img/M6Logo.png";
import petitLogo from "../img/M6_logo.svg.png";

const Logo = () => {
  return (
    <div className="container-logo">
      <img className="logo" src={logo} alt="logo M6" />
      <img className="petitLogo" src={petitLogo} alt="logo M6" />
    </div>
  );
};

export default Logo;
