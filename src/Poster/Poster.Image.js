import { dcnb } from "cnbuilder";
import React from "react";
import PropTypes from "prop-types";

/**
 * Image component.
 * @param {*} param0
 * @returns
 */
export const Image = ({ className, children, ...props }) => (
  <div
    className={dcnb(
      "su-w-140 su-h-140 su-rounded-full su-overflow-hidden su-min-w-min",
      className
    )}
    aria-hidden="true"
    {...props}
  >
    {children}
  </div>
);

Image.displayName = "Poster.Image";

Image.propTypes = {
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
Image.defaultProps = {};
