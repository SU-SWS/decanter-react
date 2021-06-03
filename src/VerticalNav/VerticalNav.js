import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { dcnb } from "cnbuilder";
import nextId from "react-id-generator";
import {
  VerticalNavStateProvider,
  VerticalNavContext,
} from "./VerticalNav.context";

// TODO:
// -- Active tree path so we can style the links of the active path.
// -- Always keep level 1 open even if there is no active item.
// -- Create and store component tree in the context.
// -- Provide a way for children links to find out if they are 'active'

// Helper Functions
// -----------------------------------------------------------------------------

const findActiveInChildren = (children) => {
  if (!Array.isArray(children)) {
    return false;
  }

  const vals = children.map((item) => {
    if (item.props.active === true) {
      return true;
    }
    if (item.props.children) {
      return findActiveInChildren(item.props.children);
    }
    return false;
  });

  // Reduce all the true/false values of the search down to one keeping true if
  // available and returning false if active was not found.
  const reduce = vals.flat().reduce((acc, curr) => acc || curr);

  return reduce;
};

// -----------------------------------------------------------------------------

/**
 * Vertical Nav Component.
 *
 * For displaying sidebar navigation.
 */
const VerticalNavRoot = ({ className, children, ...props }) => (
  <VerticalNavStateProvider>
    <nav className={dcnb("vertical-nav", className)} {...props}>
      {children}
    </nav>
  </VerticalNavStateProvider>
);

VerticalNavRoot.displayName = "VerticalNav";

/**
 *
 * @param {*} param0
 * @returns
 */
const Item = ({ active, className, children, id, ...props }) => {
  const htmlId = id || nextId("nav-item-");

  return (
    <li {...props} className={dcnb("nav-item", className)} id={htmlId}>
      {children}
    </li>
  );
};

Item.displayName = "VerticalNav.Item";

/**
 *
 * @param {*} param0
 * @returns
 */
const Group = ({ children, className, id, ...props }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const htmlId = id || nextId("nav-group-");
  const inActiveTree = findActiveInChildren(children);

  useEffect(() => {
    setIsExpanded(inActiveTree);
  }, [inActiveTree]);

  if (!isExpanded) {
    return null;
  }

  // Expaned view.
  return (
    <ul
      className={dcnb("nav-group su-list-none", className)}
      id={htmlId}
      role="menu"
      {...props}
    >
      {children}
    </ul>
  );
};
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
