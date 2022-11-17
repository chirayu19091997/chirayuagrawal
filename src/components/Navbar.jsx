import React from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header style={{ height: "40px", width: "100vw" }}>
      <img src={Logo} alt="logo" style={{ height: "100%" }} />
    </header>
  );
};

export default Navbar;
