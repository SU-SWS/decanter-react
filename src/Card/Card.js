import React from "react";
import PropTypes from "prop-types";
import { dcnb } from "cnbuilder";
import { FlexBox } from "../FlexBox/FlexBox";
import { Heading } from "../Heading/Heading";
import { cardAlignOptions, cardElements } from "./Card.levers";

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
        "card su-max-w-600 su-basefont-23",
        wrapperClasses,
        className
      )}
    >
      {children}
    </Element>
  );
};

// Subcomponents
// ---------------------------------------------------------------------------
const Content = ({ children, className, align }) => {
  // Content alignment including image and CTA, default is left-align
  // This setting overrides the alignment option in the nested CTA
  let bodyAlign = "su-items-start";
  let contentClass = "";

  if (align === "center") {
    contentClass = dcnb(contentClass, "children:su-mx-auto su-text-center");
    bodyAlign = "su-items-center";
  }

  if (align === "right") {
    contentClass = dcnb(contentClass, "children:su-mx-auto su-text-right");
    bodyAlign = "su-items-end";
  }

  return (
    <FlexBox
      direction="col"
      className={dcnb("card-body", bodyAlign, contentClass, className)}
    >
      {children}
    </FlexBox>
  );
};

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

const Superhead = ({ children, className }) => (
  <span
    className={dcnb("su-font-sans su-font-bold su-type-0 su-mb-0", className)}
  >
    {children}
  </span>
);
Superhead.displayName = Superhead;
Card.Superhead = Superhead;

const Headline = ({ children }) => <Heading>{children}</Heading>;
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

Content.propTypes = {
  /**
   * Text Align Type
   */
  align: PropTypes.oneOf(cardAlignOptions),

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

Superhead.propTypes = {
  // Children
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
  // CSS Classes.
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
};

Headline.propTypes = {
  // Children
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
};

// Default Props.
// -----------------------------------------------------------------------------
Card.defaultProps = {
  isMinimal: false,
};

Content.defaultProps = {
  align: "left",
};
