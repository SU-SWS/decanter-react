import React from "react";
import PropTypes from "prop-types";
import { dcnb } from "cnbuilder";
import { FlexBox } from "../FlexBox/FlexBox";
import { cardAlignOptions, cardElements } from "./Card.levers";
import { Superhead } from "./Card.Superhead";
import { Headline } from "./Card.Headline";
import { Content } from "./Card.Content";

/**
 * Card Component
 *
 * HTML card element
 */

export const Card = ({ className, children, element, isMinimal, ...props }) => {
  // Defaults & Variables.
  // ---------------------------------------------------------------------------
  // props.element
  let Element = "div";

  if (element && cardElements.includes(element)) {
    Element = element;
  }

  let wrapperClasses =
    "su-bg-white su-text-black su-border su-border-solid su-border-black-10 su-shadow";

  if (isMinimal) {
    wrapperClasses = "";
  }

  return (
    <Element
      className={dcnb(
        "basic-card su-max-w-600 su-basefont-23",
        wrapperClasses,
        className
      )}
      {...props}
    >
      {children}
    </Element>
  );
};

// Subcomponents
// ---------------------------------------------------------------------------

Content.displayName = Content;
Card.Content = Content;

const Image = ({ image, className }) => {
  // Basic card image has aspect ratio 2x1
  const imageWrapperClasses = "su-aspect-w-2 su-aspect-h-1";

  return (
    <div className={dcnb(imageWrapperClasses, className)} aria-hidden="true">
      <img src={image.filename} alt="" {...image} />
    </div>
  );
};
Image.displayName = Image;
Card.Image = Image;

Superhead.displayName = Superhead;
Card.Superhead = Superhead;

Headline.displayName = Headline;
Card.Headline = Headline;

// Prop Types.
// -----------------------------------------------------------------------------
Card.propTypes = {
  /**
   * Is the card minimal style disabled?
   */
  isMinimal: PropTypes.bool,

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

Image.propTypes = {
  // CSS Classes.
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),

  // Image
  image: PropTypes.string,
};

// Default Props.
// -----------------------------------------------------------------------------
Card.defaultProps = {
  isMinimal: false,
};
