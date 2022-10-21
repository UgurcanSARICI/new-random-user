import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-div">
      <a
        href="https://github.com/UgurcanSARICI"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <code className="brand">{"Ugurcan SARICI"}</code>
      </a>
    </div>
  );
};

export default Footer;
