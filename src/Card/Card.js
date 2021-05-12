import React from "react";
import PropTypes from "prop-types";
import { dcnb } from "cnbuilder";
import { cardCtaOptions } from "./Card.levers";
import { FlexBox } from "../FlexBox/FlexBox";
import { Heading } from "../Heading/Heading";
import { CtaButton } from "../CtaButton/CtaButton";

/**
 * Card Component
 *
 * HTML card element
 */
export const Card = ({
  className,
  headline,
  headingLevel,
  superHeadline,
  image,
  text,
  cta,
  align,
  isMinimal,
  ...props
}) => {
  // Defaults & Variables.
  // ---------------------------------------------------------------------------
  const levers = {};

  // Levers
  // ---------------------------------------------------------------------------

  let wrapperClasses =
    "su-bg-white su-text-black su-border su-border-solid su-border-transparent-black su-shadow";

  // Basic card image has aspect ratio 4x3 for non-round option
  let imageWrapperClasses = "su-aspect-w-4 su-aspect-h-3";

  // Option to use "minimal" card variant
  let bodyPadding = "su-rs-px-2 su-rs-pt-2 su-rs-pb-4";

  if (isMinimal) {
    wrapperClasses = "";
    bodyPadding = "su-rs-pt-2";
    imageWrapperClasses = dcnb(imageWrapperClasses, { "su-rs-ml-2": false });
  }

  // Content alignment including image and CTA, default is left-align
  // This setting overrides the alignment option in the nested CTA
  let bodyAlign = "su-items-start";

  if (align === "center") {
    wrapperClasses = dcnb(wrapperClasses, "children:su-mx-auto su-text-center");
    bodyAlign = "su-items-center";
  }

  return (
    <div
      className={dcnb("basic-card su-max-w-600 su-basefont-23", wrapperClasses)}
    >
      <div className={imageWrapperClasses} aria-hidden="true">
        <img src="http://placecorgi.com/260/180" alt="lorem ipsum" />
      </div>
      <FlexBox
        direction="col"
        className={dcnb("card-body", bodyPadding, bodyAlign)}
      >
        {superHeadline && (
          <span className={dcnb("su-font-serif su-bold su-mb-0")}>
            {superHeadline}
          </span>
        )}
        <Heading
          level={headingLevel ?? 3}
          className={dcnb("su-font-serif su-bold su-mb-0")}
        >
          {headline}
        </Heading>
        {text && (
          <p className="su-card-paragraph su-rs-mt-neg1 su-mb-0">{text}</p>
        )}
        <CtaButton variant="solid" size="default" text="CTA Button" />
      </FlexBox>
    </div>
  );
};

// Prop Types.
// -----------------------------------------------------------------------------
Card.propTypes = {
  /**
   * Is the card minimal style disabled?
   */
  isMinimal: PropTypes.bool,

  /**
   * CSS Class names.
   */
  className: PropTypes.string,

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
