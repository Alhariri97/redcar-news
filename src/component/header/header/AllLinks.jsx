import React from "react";
import { Link } from "react-router-dom";

const AllLinks = ({ setShowMpileBar }) => {
  return (
    <>
      <Link
        to={"/"}
        className="link-to"
        onClick={() => {
          if (setShowMpileBar) {
            setShowMpileBar(false);
          }
        }}
      >
        Home
      </Link>
      <Link
        to={"/contact"}
        className="link-to"
        onClick={() => {
          if (setShowMpileBar) {
            setShowMpileBar(false);
          }
        }}
      >
        Contact
      </Link>
      <Link
        to={"/about"}
        className="link-to"
        onClick={() => {
          if (setShowMpileBar) {
            setShowMpileBar(false);
          }
        }}
      >
        About
      </Link>
    </>
  );
};

export default AllLinks;
