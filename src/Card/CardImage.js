import React from "react";
import PropTypes from "prop-types";
import { dcnb } from "cnbuilder";

/**
 * Card Image Subcomponent
 *
 * HTML card element
 */
export const CardImage = ({ className, image, ...props }) => {
  // Defaults & Variables.
  // ---------------------------------------------------------------------------
  // Basic card image has aspect ratio 2x1
  let imageWrapperClasses = "su-aspect-w-2 su-aspect-h-1";

  return (
    <div className={dcnb(imageWrapperClasses, className)} aria-hidden="true">
      <img src={image.filename} alt="" />
    </div>
  );
};

// Prop Types.
// -----------------------------------------------------------------------------
CardImage.propTypes = {
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
CardImage.defaultProps = {};
