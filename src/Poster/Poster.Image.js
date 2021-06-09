import { dcnb } from "cnbuilder";
import React from "react";
import PropTypes from "prop-types";

/**
 * Image component.
 * @param {*} param0
 * @returns
 */
export const Image = ({ image, className }) => {
  // Remove alt.
  if (image.alt) {
    // eslint-disable-next-line no-param-reassign
    delete image.alt;
  }

  return (
    <div
      className={dcnb(
        "su-w-140 su-h-140 su-rounded-full su-overflow-hidden su-min-w-min",
        className
      )}
      aria-hidden="true"
    >
      <img
        {...image}
        alt=""
        className={dcnb(
          "su-object-cover su-w-full su-h-full su-object-center",
          image.className
        )}
      />
    </div>
  );
};

Image.displayName = "Poster.Image";

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

// Default Props.
// -----------------------------------------------------------------------------
Image.defaultProps = {};
