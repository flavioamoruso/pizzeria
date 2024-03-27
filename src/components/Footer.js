import React from "react";
import { FaBars } from "react-icons/fa";
import { SocialComponent } from "../utils/social";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container footer-container">
          <h4 className="footer-text" style={{ marginTop: "8px" }}>
            all &copy; reserved to
            <span className="brand-color"> pizzaj</span>
            <SocialComponent classLink="social-top" />
          </h4>
        </div>
      </footer>
    </>
  );
};

export default Footer;
