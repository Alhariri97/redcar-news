import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../../../api";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import AllLinks from "../../header/header/AllLinks";

const MopileSidbar = ({ setShowMpileBar, setSearchTopic }) => {
  const [allTopics, setAllTopics] = useState([]);
  useEffect(() => {
    getTopics().then(({ topics }) => {
      setAllTopics(topics);
    });
  }, []);
  return (
    <div id="mopile-nav-sid">
      <div className="inner-mpile">
        <span
          onClick={() => {
            setShowMpileBar(false);
          }}
        >
          <FontAwesomeIcon id="mopail-icon" icon={faXmark} />
        </span>
        <AllLinks setShowMpileBar={setShowMpileBar} />
        <div>
          {allTopics.map((topice) => {
            return (
              <Link
                to={`/`}
                key={topice.slug}
                onClick={() => {
                  setShowMpileBar(false);
                  setSearchTopic(topice.slug);
                }}
                className="topic"
              >
                <h4>{topice.slug}</h4>
                <p>{topice.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MopileSidbar;
