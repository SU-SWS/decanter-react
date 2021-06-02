import { dcnb } from "cnbuilder";
import React from "react";
import PropTypes from "prop-types";
import { imageAspectRatios } from "./Card.levers";

/**
 * Image component.
 * @param {*} param0
 * @returns
 */
export const Image = ({ image, aspectRatio, className }) => {
  // Basic card image has aspect ratio 2x1
  const imageAspectRatio = imageAspectRatios[aspectRatio];

  // Remove alt.
  if (image.alt) {
    // eslint-disable-next-line no-param-reassign
    delete image.alt;
  }

  return (
    <div className={dcnb(imageAspectRatio, className)} aria-hidden="true">
      <img {...image} alt="" className="su-object-cover" />
    </div>
  );
};

Image.displayName = "Card.Image";

Image.propTypes = {
  /**
   * Aspect ratio of the card image
   */
  aspectRatio: PropTypes.oneOf(Object.keys(imageAspectRatios)),
  // CSS Classes.
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),

  // Image
  image: PropTypes.shape({
    src: PropTypes.string,
  }),
};

// Default Props.
// -----------------------------------------------------------------------------
Image.defaultProps = {
  aspectRatio: "2x1",
};
