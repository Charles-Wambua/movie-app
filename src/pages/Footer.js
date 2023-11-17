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
        paddingTop: "20px",
        paddingBottom: "20px",
        position: "fixed",
        bottom: "0",
        width: "100%",
        alignItems: "center",
      }}
    >
      <div>
        <p>
          <a
            href="https://wa.me/254114652533"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "aliceblue" }}
          >
            @ <span style={{ color: "orange", fontfamily: 'poppinsemilight'}}>ck.wa.me</span>
          </a>
        </p>
      </div>
      <div>
        <p>2023</p>
      </div>
      <div>
        <a
          href="https://github.com/Charles-Wambua/movie-app"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "aliceblue",fontfamily: 'poppinsemilight' }}
        >
          <i
            class="fab fa-github"
            style={{ color: "white", marginRight: 10 }}
          ></i>
          (github)
        </a>
      </div>
    </div>
  );
}

export default Footer;
