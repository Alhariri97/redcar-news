import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        height: "92vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gridArea: "cont",
      }}
    >
      <div className="lds-default">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
