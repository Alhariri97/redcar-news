import React from "react";
import AllLinks from "./AllLinks";
const Links = ({ setSearchTopic }) => {
  return (
    <div id="links-bar">
      <AllLinks setSearchTopic={setSearchTopic} />
    </div>
  );
};

export default Links;
