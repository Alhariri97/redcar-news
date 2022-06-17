import React from "react";
import Navbar from "./Navbar";

const Header = ({ setOrder, setSortBy }) => {
  return (
    <header>
      <Navbar setOrder={setOrder} setSortBy={setSortBy} />
    </header>
  );
};

export default Header;
