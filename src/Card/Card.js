import React from "react";
import PropTypes from "prop-types";
import { dcnb } from "cnbuilder";
import { cardAlignOptions } from "./Card.levers";
import { FlexBox } from "../FlexBox/FlexBox";
import { CardImage } from "./CardImage";
import { CardContent } from "./CardContent";
import { CardSuperhead } from "./CardSuperhead";
import { Heading } from "../Heading/Heading";
import { CtaLink } from "../CtaLink/CtaLink";
import { CtaButton } from "../CtaButton/CtaButton";

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

  // Basic card image has aspect ratio 4x3 for non-round option
  let imageWrapperClasses = "su-aspect-w-2 su-aspect-h-1";

  // Option to use "minimal" card variant
  let bodyPadding = "su-rs-px-2 su-rs-pt-2 su-rs-pb-4";

  if (isMinimal) {
    wrapperClasses = "";
    bodyPadding = "";
  }

  if (isMinimal && image) {
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

  // wrapperClasses = dcnb(wrapperClasses, bodyPadding, bodyAlign, bodyPadding);

  return (
    <article
      className={dcnb(
        "basic-card su-max-w-600 su-basefont-23",
        wrapperClasses,
        className
      )}
    >
      {/* {image && (
        <div className={imageWrapperClasses} aria-hidden="true">
          <img src={image.filename} alt="" />
        </div>
      )}
      <FlexBox
        direction="col"
        className={dcnb("card-body", bodyPadding, bodyAlign)}
      > */}
      {children}
      {/* </FlexBox> */}
    </article>
  );
};

Card.Image = <CardImage />;
Card.Content = <CardContent />;
Card.Superhead = <CardSuperhead />;
Card.Heading = <Heading />;
Card.CtaLink = <CtaLink />;
Card.CtaButton = <CtaButton />;

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
