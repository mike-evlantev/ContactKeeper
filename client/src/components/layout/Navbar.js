import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ title, icon }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="www.google.com">
        <i className={icon} />
        &nbsp;
        {title}
      </a>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt"
};
export default Navbar;
