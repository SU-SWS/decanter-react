import React from "react";
import PropTypes from "prop-types";
import { dcnb } from "cnbuilder";
import { FlexBox } from "../FlexBox/FlexBox";

/**
 * Card Content Subcomponent
 *
 * HTML card element
 */
export const CardContent = ({
  className,
  children,
  isMinimal,
  align,
  ...props
}) => {
  // Defaults & Variables.
  // ---------------------------------------------------------------------------

  // Option to use "minimal" card variant
  let bodyPadding = "su-rs-px-2 su-rs-pt-2 su-rs-pb-4";

  if (isMinimal) {
    bodyPadding = "";
  }

  // Content alignment including image and CTA, default is left-align
  // This setting overrides the alignment option in the nested CTA

  let bodyAlign = "su-items-start";

  return (
    <FlexBox
      direction="col"
      className={dcnb("card-body", bodyPadding, bodyAlign, className)}
    >
      {children}
    </FlexBox>
  );
};

// Prop Types.
// -----------------------------------------------------------------------------
CardContent.propTypes = {
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
CardContent.defaultProps = {};
