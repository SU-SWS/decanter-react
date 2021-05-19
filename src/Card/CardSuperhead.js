import React from "react";
import PropTypes from "prop-types";
import { dcnb } from "cnbuilder";

/**
 * Card Superhead Subcomponent
 *
 * HTML card element
 */
export const CardSuperhead = ({ className, children, ...props }) => (
  <span
    className={dcnb("su-font-sans su-font-bold su-type-0 su-mb-0", className)}
  >
    {children}
  </span>
);

// Prop Types.
// -----------------------------------------------------------------------------
CardSuperhead.propTypes = {
  // CSS Classes.
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),

  // Children
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
};

// Default Props.
// -----------------------------------------------------------------------------
CardSuperhead.defaultProps = {};
