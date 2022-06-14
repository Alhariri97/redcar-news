import React, { useState } from "react";
import MopileSidbar from "../../main/mainComponent/MopileSidbar";
import Links from "./Links";
import Search from "./Search";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ allArticles, setAllArticles, setSearchTopic }) => {
  const [showMpileBar, setShowMpileBar] = useState(false);
  return (
    <div className="nav-bar">
      <div id="mopail-icon" onClick={() => setShowMpileBar(!showMpileBar)}>
        <FontAwesomeIcon id="mopail-icon" icon={faBars} />
      </div>
      {showMpileBar ? (
        <MopileSidbar
          setShowMpileBar={setShowMpileBar}
          setSearchTopic={setSearchTopic}
        />
      ) : (
        <></>
      )}
      <Links setSearchTopic={setSearchTopic} />
      <Search allArticles={allArticles} setAllArticles={setAllArticles} />
    </div>
  );
};

export default Navbar;
