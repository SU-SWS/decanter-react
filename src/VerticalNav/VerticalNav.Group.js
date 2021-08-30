import React from "react";
import PropTypes from "prop-types";
import { dcnb } from "cnbuilder";
import nextId from "react-id-generator";

/**
 *
 * @param {*} param0
 * @returns
 */
export const Group = ({
  children,
  className,
  inActivePath,
  level,
  id,
  ref,
  key,
  ...props
}) => {
  const htmlId = id || nextId("nav-group-");
  const keyId = key || htmlId;

  if (!inActivePath && level > 1) {
    return null;
  }

  // Expaned view.
  return (
    <ul
      className={dcnb("nav-group su-list-none", className)}
      id={htmlId}
      key={keyId}
      role="menu"
      ref={ref}
      {...props}
    >
      {children}
    </ul>
  );
};

Group.displayName = "VerticalNav.Group";

// Prop Types.
// -----------------------------------------------------------------------------

Group.propTypes = {
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
