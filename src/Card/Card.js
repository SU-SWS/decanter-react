import React from "react";
import PropTypes from "prop-types";
import { dcnb } from "cnbuilder";
import { cardCtaOptions, cardAlignOptions } from "./Card.levers";
import { FlexBox } from "../FlexBox/FlexBox";
import { Heading } from "../Heading/Heading";
import { CtaLink } from "../CtaLink/CtaLink";
import { iconOptions } from "../common/icon/icon.levers";
import { CtaButton } from "../CtaButton/CtaButton";
import { ctaButtonVariants } from "../CtaButton/CtaButton.levers";
import { buttonSizes } from "../common/button/button.levers";

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
  filename,
  text,
  cta,
  ctaText,
  linkIcon,
  buttonVariant,
  buttonSize,
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

  let buttonClasses = "su-rs-mt-neg1";

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
      {image && (
        <div className={imageWrapperClasses} aria-hidden="true">
          <img src={image.filename} alt={image.alt} />
        </div>
      )}
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

        {ctaText &&
          (cta === "ctaButton" ? (
            <CtaButton
              variant={buttonVariant}
              size={buttonSize}
              text={ctaText}
              className={buttonClasses}
            />
          ) : (
            <CtaLink text={ctaText} className={buttonClasses} icon={linkIcon} />
          ))}
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
   * CTA Text
   */
  ctaText: PropTypes.string,

  /**
   * CTA Type
   */
  cta: PropTypes.oneOf(cardCtaOptions),

  /**
   *  Link Icon
   */
  linkIcon: PropTypes.oneOf(iconOptions),

  /**
   *  Button Variant
   */
  buttonVariant: PropTypes.oneOf(ctaButtonVariants),

  /**
   * Button size
   */
  buttonSize: PropTypes.oneOf(buttonSizes),

  /**
   * Text Align Type
   */
  align: PropTypes.oneOf(cardAlignOptions),
};

// Default Props.
// -----------------------------------------------------------------------------
Card.defaultProps = {
  cta: "ctaButton",
  linkIcon: "action",
  buttonVariant: "solid",
  buttonSize: "default",
  align: "left",
  isMinimal: false,
};
