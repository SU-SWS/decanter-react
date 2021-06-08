import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { dcnb } from "cnbuilder";
import nextId from "react-id-generator";
import { FindActiveInChildren } from "./VerticalNav.context";

/**
 *
 * @param {*} param0
 * @returns
 */
export const Group = ({
  children,
  className,
  level,
  id,
  ref,
  key,
  ...props
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const htmlId = id || nextId("nav-group-");
  const keyId = key || htmlId;
  const inActiveTree = FindActiveInChildren(children);

  useEffect(() => {
    setIsExpanded(inActiveTree || level === 1);
  }, [inActiveTree, level]);

  if (!isExpanded) {
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
