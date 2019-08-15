import React from "react";
import PropTypes from "prop-types";

const Footer = ({ version }) => {
  return (
    <footer className="footer">
      <div className="container">
        <span>Version: {version}</span>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  version: PropTypes.string
};

Footer.defaultProps = {
  version: "0.0.0"
};
export default Footer;
