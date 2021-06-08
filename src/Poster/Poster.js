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
  layout,
}) => {
  let wrapperClasses;
  let imageWrapper;
  let contentWrapper;

  if (layout === "left") {
    wrapperClasses = "su-flex su-flex-col su-justify-center md:su-flex-row";
    imageWrapper =
      "first:su-min-w-[14rem] su-rs-mb-2 su-mx-auto md:su-rs-mr-4 md:su-mb-0 md:su-ml-0";
    contentWrapper = "last:su-items-start md:su-flex-grow";
  } else {
    wrapperClasses = "su-flex su-flex-col su-items-center";
    contentWrapper = "last:su-items-center su-text-center";
    imageWrapper = "first:su-rs-mb-2";
  }

  let gradientOverlay = "linear-gradient(to bottom, transparent, #181D1C)";
  let bgImageStyle = {};

  if (bgGradient) {
    gradientOverlay = bgGradient;
  }

  // Process image and set inline background image if image exists
  if (src) {
    // Set background image style
    bgImageStyle = {
      backgroundImage: `${gradientOverlay}, url('${src}')`,
    };
  }

  return (
    <div
      className={dcnb(
        "poster su-basefont-23 su-rs-pt-5 su-rs-pb-6 su-bg-cover su-bg-no-repeat",
        wrapperClasses,
        imageWrapper,
        contentWrapper,
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

  // Background Image
  bgImage: PropTypes.shape({
    src: PropTypes.string,
  }),
};

// Default Props.
// -----------------------------------------------------------------------------
PosterRoot.defaultProps = {
  layout: "center",
};
