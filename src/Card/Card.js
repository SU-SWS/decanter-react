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

const CardRoot = ({ className, children, element, isMinimal, ...props }) => {
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

CardRoot.displayName = "Card";

// Subcomponents
// ---------------------------------------------------------------------------

/**
 * Content Component.
 * @param {*} param0
 * @returns
 */
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

Content.displayName = "Card.Content";

/**
 * Image component.
 * @param {*} param0
 * @returns
 */
const Image = ({ image, className }) => {
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
Image.displayName = "Card.Image";

/**
 * Superhead component
 * @param {*} param0
 * @returns
 */
const Superhead = ({ children, className }) => (
  <span
    className={dcnb("su-font-sans su-font-bold su-type-0 su-mb-0", className)}
  >
    {children}
  </span>
);
Superhead.displayName = "Card.Superhead";

/**
 * Headline component
 * @param {*} param0
 * @returns
 */
const Headline = ({ children, level = 3, size = 1, className }) => (
  <Heading level={level} size={size} className={dcnb("su-mb-0", className)}>
    {children}
  </Heading>
);
Headline.displayName = "Card.Headline";

/**
 * Exports
 */
export const Card = Object.assign(CardRoot, {
  Superhead,
  Headline,
  Content,
  Image,
});

// Prop Types.
// -----------------------------------------------------------------------------
CardRoot.propTypes = {
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
  image: PropTypes.shape({
    src: PropTypes.string,
  }),
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
CardRoot.defaultProps = {
  isMinimal: false,
};

Content.defaultProps = {
  align: "left",
};
