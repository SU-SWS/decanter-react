import React, { useContext } from "react";
import PropTypes from "prop-types";
import { dcnb } from "cnbuilder";
import {
  VerticalNavStateProvider,
  VerticalNavContext,
} from "./VerticalNav.context";

/**
 * Vertical Nav Component.
 *
 * For displaying sidebar navigation.
 *
 */
const VerticalNavRoot = ({ className, children, ...props }) => {
  const { dispatch } = useContext(VerticalNavContext);

  return (
    <VerticalNavStateProvider>
      <div className={dcnb("vertical-nav", className)}>{children}</div>
    </VerticalNavStateProvider>
  );
};
VerticalNavRoot.displayName = "VerticalNav";

const Item = ({ children, active, ...props }) => {
  const { dispatch } = useContext(VerticalNavContext);

  const doClick = (event) => {
    dispatch({ type: "clicked", val: "Clicked Me" });
  };

  const doKeyDown = (event) => {
    dispatch({ type: "clicked", val: "Pressed Me" });
  };

  if (active) {
    console.log("Is active");
  }

  return (
    <li {...props} onClick={doClick} onKeyDown={doKeyDown}>
      {children}
    </li>
  );
};

Item.displayName = "VerticalNav.Item";

const Group = ({ children, ...props }) => <ul {...props}>{children}</ul>;
Group.displayName = "VerticalNav.Group";

export const VerticalNav = Object.assign(VerticalNavRoot, { Item, Group });

// Prop Types.
// -----------------------------------------------------------------------------

VerticalNavRoot.propTypes = {
  // Nodes and content.
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
  ]),
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]),
};

Item.propTypes = {
  active: PropTypes.bool,
};
