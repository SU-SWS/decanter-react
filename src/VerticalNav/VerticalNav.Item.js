import React, { useContext } from "react";
import PropTypes from "prop-types";
import { dcnb } from "cnbuilder";
import nextId from "react-id-generator";
import { VerticalNavContext } from "./VerticalNav.context";

/**
 *
 * @param {*} param0
 * @returns
 */
export const Item = ({
  active,
  inActivePath,
  level,
  className,
  children,
  id,
  ref,
  key,
  ...props
}) => {
  const htmlId = id || nextId("nav-item-");
  const keyId = key || htmlId;

  const { dispatch } = useContext(VerticalNavContext);

  if (active) {
    dispatch({ type: "setActive", id: htmlId });
  }

  return (
    <li
      {...props}
      className={dcnb("nav-item", className)}
      id={htmlId}
      key={keyId}
      ref={ref}
    >
      {children}
    </li>
  );
};

Item.displayName = "VerticalNav.Item";

// Prop Types.
// -----------------------------------------------------------------------------

Item.propTypes = {
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
