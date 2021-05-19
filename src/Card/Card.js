import React from "react";
import PropTypes from "prop-types";
import { dcnb } from "cnbuilder";
import { cardAlignOptions } from "./Card.levers";
import { FlexBox } from "../FlexBox/FlexBox";
import { Heading } from "../Heading/Heading";

/**
 * Card Component
 *
 * HTML card element
 */
export const Card = ({
  className,
  children,
  image,
  align,
  isMinimal,
  ...props
}) => {
  // Defaults & Variables.
  // ---------------------------------------------------------------------------

  let wrapperClasses =
    "su-bg-white su-text-black su-border su-border-solid su-border-black-10 su-shadow";

  if (isMinimal) {
    wrapperClasses = "";
  }

  // wrapperClasses = dcnb(wrapperClasses, bodyPadding, bodyAlign, bodyPadding);

  return (
    <article
      className={dcnb(
        "basic-card su-max-w-600 su-basefont-23",
        wrapperClasses,
        className
      )}
    >
      {children}
    </article>
  );
};

// Subcomponents
// ---------------------------------------------------------------------------
const Content = ({ children, className, image, align, isMinimal }) => {
  // Option to use "minimal" card variant
  let bodyPadding = "su-rs-px-2 su-rs-pt-2 su-rs-pb-4";

  // Content alignment including image and CTA, default is left-align
  // This setting overrides the alignment option in the nested CTA
  let bodyAlign = "su-items-start";
  let contentClass = "";

  if (align === "center") {
    contentClass = dcnb(contentClass, "children:su-mx-auto su-text-center");
    bodyAlign = "su-items-center";
  }

  // If Card component isMinimal
  if (isMinimal) {
    bodyPadding = "";
  }

  if (isMinimal && image) {
    bodyPadding = "su-rs-pt-2";
  }

  return (
    <FlexBox
      direction="col"
      className={dcnb(
        "card-body",
        bodyPadding,
        bodyAlign,
        contentClass,
        className
      )}
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
    <div className={imageWrapperClasses} aria-hidden="true">
      <img src={image.filename} alt="" />
    </div>
  );
};
Image.displayName = Image;
Card.Image = Image;

const Superhead = ({ children }) => (
  <span className="su-font-sans su-font-bold su-type-0 su-mb-0">
    {children}
  </span>
);
Superhead.displayName = Superhead;
Card.Superhead = Superhead;

const Headline = ({ children }) => <Heading>{children}</Heading>;
Headline.displayName = Headline;
Card.Headline = Headline;

const Body = ({ children }) => <p className="su-card-paragraph">{children}</p>;
Body.displayName = Body;
Card.Body = Body;

const Cta = ({ children, className }) => (
  <div className={className}>{children}</div>
);
Cta.displayName = Cta;
Card.Cta = Cta;

// Prop Types.
// -----------------------------------------------------------------------------
Card.propTypes = {
  /**
   * Is the card minimal style disabled?
   */
  isMinimal: PropTypes.bool,

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

// Default Props.
// -----------------------------------------------------------------------------
Card.defaultProps = {
  align: "left",
  isMinimal: false,
};
