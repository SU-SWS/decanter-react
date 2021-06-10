import React from "react";
import PropTypes from "prop-types";
import { dcnb } from "cnbuilder";
import { layoutOptions } from "./Poster.levers";
import { Headline } from "./Poster.Headline";
import { Content } from "./Poster.Content";
import { Image } from "./Poster.Image";

/**
 * Poster Component
 *
 * HTML card element
 */

const PosterRoot = ({
  bgImage: { src } = {},
  bgGradient,
  bgColor,
  className,
  children,
  isGradient,
  layout,
}) => {
  let wrapperClasses;

  if (layout === "left") {
    wrapperClasses =
      "su-flex su-flex-col su-justify-center md:su-flex-row su-min-w-min";
  } else {
    wrapperClasses = "su-flex su-flex-col su-items-center";
  }

  let gradientOverlay = "";
  let bgImageStyle = {};

  // Process image and set inline background image if image exists
  if (src) {
    // Set background image style
    bgImageStyle = {
      backgroundImage: `url('${src}')`,
    };
  }

  if (isGradient) {
    gradientOverlay = "linear-gradient(to bottom, transparent, #181D1C)";

    if (bgGradient) {
      gradientOverlay = bgGradient;
    }

    // Process image and set inline background image with gradient if image exists
    if (src) {
      // Set background image style
      bgImageStyle = {
        backgroundImage: `${gradientOverlay}, url('${src}')`,
      };
    }
  }

  return (
    <div
      className={dcnb(
        "poster su-basefont-23 su-rs-pt-5 su-rs-pb-6 su-bg-cover su-bg-no-repeat",
        wrapperClasses,
        bgColor,
        className
      )}
      style={bgImageStyle}
    >
      {children}
    </div>
  );
};

PosterRoot.displayName = "Poster";

/**
 * Exports
 */
export const Poster = Object.assign(PosterRoot, {
  Headline,
  Content,
  Image,
});

// Prop Types.
// -----------------------------------------------------------------------------
PosterRoot.propTypes = {
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

  /*
   *
   *  Is the layout alignment center or left?
   *
   */
  layout: PropTypes.oneOf(layoutOptions),

  /*
   *
   *  Is the Background Gradient Style enabled?
   *
   */
  isGradient: PropTypes.bool,

  // Background Image
  bgImage: PropTypes.shape({
    src: PropTypes.string,
  }),

  // Background Gradient
  bgGradient: PropTypes.string,

  // Background Color
  bgColor: PropTypes.string,
};

// Default Props.
// -----------------------------------------------------------------------------
PosterRoot.defaultProps = {
  layout: "center",
  isGradient: false,
};
