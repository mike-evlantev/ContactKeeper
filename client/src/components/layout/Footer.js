import React from "react";
import PropTypes from "prop-types";

const Footer = ({ version }) => {
  return (
    <footer className="navbar fixed-bottom navbar-dark bg-dark">
      <div className="container">
        <h6 className="navbar-brand text-muted">
          <small>Version: {version}</small>
        </h6>
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
