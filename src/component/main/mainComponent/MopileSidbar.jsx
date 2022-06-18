import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../../../api";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import AllLinks from "../../header/header/AllLinks";

const MopileSidbar = ({ setShowMpileBar }) => {
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
          {allTopics.map((topic) => {
            return (
              <Link
                to={`/topic/${topic.slug}`}
                key={topic.slug}
                onClick={() => {
                  setShowMpileBar(false);
                }}
                className="topic"
              >
                <h4>{topic.slug}</h4>
                <p>{topic.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MopileSidbar;
