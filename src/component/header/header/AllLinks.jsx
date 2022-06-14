import React from "react";
import { Link } from "react-router-dom";

const AllLinks = ({ setSearchTopic, setShowMpileBar }) => {
  return (
    <>
      <Link
        to={"/"}
        className="link-to"
        onClick={() => {
          setShowMpileBar(false);
          setSearchTopic("");
        }}
      >
        Home
      </Link>
      <Link
        to={"/contact"}
        className="link-to"
        onClick={() => {
          setShowMpileBar(false);
        }}
      >
        Contact
      </Link>
      <Link
        to={"/about"}
        className="link-to"
        onClick={() => {
          setShowMpileBar(false);
        }}
      >
        About
      </Link>
      <Link
        to={"/about"}
        className="link-to"
        onClick={() => {
          setShowMpileBar(false);
        }}
      >
        Any
      </Link>
    </>
  );
};

export default AllLinks;
