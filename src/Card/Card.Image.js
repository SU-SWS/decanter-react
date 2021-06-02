import { dcnb } from "cnbuilder";
import React from "react";
import PropTypes from "prop-types";

/**
 * Image component.
 * @param {*} param0
 * @returns
 */
export const Image = ({ image, className }) => {
  // Basic card image has aspect ratio 2x1
  const imageWrapperClasses = "su-aspect-w-2 su-aspect-h-1";

  // Remove alt.
  if (image.alt) {
    // eslint-disable-next-line no-param-reassign
    delete image.alt;
  }

  return (
    <div className={dcnb(imageWrapperClasses, className)} aria-hidden="true">
      <img {...image} alt="" />
    </div>
  );
};

Image.propTypes = {
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
