import React from "react";
import PropTypes from "prop-types";

const MenuItem = ({ children, onClick }) => (
  <li data-testid="menu-item" className={["ragnarok", "menu-item"].join(" ")}>
    <div
      role="button"
      className={["ragnarok", "menu-item-button"].join(" ")}
      tabIndex={0}
      onClick={onClick ? () => onClick() : undefined}
      onKeyPress={onClick ? () => onClick() : undefined}
    >
      {children}
    </div>
  </li>
);

const Dropdown = ({ children, open, position }) => (
  <ul
    data-testid="dropdown"
    className={["ragnarok", "dropdown", open ? "open" : "close", position].join(
      " "
    )}
    style={{ zIndex: 9999 }}
  >
    {children}
  </ul>
);

const Menu = ({ children }) => (
  <div data-testid="menu" className={["ragnarok", "menu"].join(" ")}>
    {children}
  </div>
);

Menu.propTypes = {
  /**
   * Menu content
   */
  children: PropTypes.node.isRequired,
};

Dropdown.defaultProps = {
  open: false,
  position: "left",
};

Dropdown.propTypes = {
  /**
   * Open/Close condition
   */
  open: PropTypes.bool,
  /**
   * Where should it appear?
   */
  position: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  /**
   * Dropdown content
   */
  children: PropTypes.node.isRequired,
};

MenuItem.defaultProps = {
  onClick: undefined,
};

MenuItem.propTypes = {
  /**
   * Optional click Handler
   */
  onClick: PropTypes.func,
  /**
   * MenuItem content
   */
  children: PropTypes.node.isRequired,
};

export { Dropdown, Menu, MenuItem };
