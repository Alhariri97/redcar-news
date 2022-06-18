import React from "react";
import Navbar from "./Navbar";

import { UserContext } from "../../context/UserContext"; //<----and this
import { useContext } from "react"; //<------------------- this

const Header = () => {
  return (
    <header>
      <Navbar />
    </header>
  );
};

export default Header;
