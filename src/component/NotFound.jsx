import React from "react";
import notFound from "../images/404 Error Page not Found with people connecting a plug-amico.png";
const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        className="img-not-found"
        src={notFound}
        alt="page not found"
        style={{}}
      ></img>
    </div>
  );
};

export default NotFound;
