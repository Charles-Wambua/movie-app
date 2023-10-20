import React from "react";

function Footer() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "black",
        color: "white",
        justifyContent: "space-evenly",
        paddingTop: "40px",
        paddingBottom: "40px",
      }}
    >
      <div>
        <p>
          @ <span style={{ color: "orange" }}>cc.ckw</span>
        </p>
      </div>
      <div>
        <p>2023</p>
      </div>
    </div>
  );
}

export default Footer;
