import { dcnb } from "cnbuilder";
import React from "react";
import PropTypes from "prop-types";
import { FlexBox } from "../FlexBox/FlexBox";
import { cardAlignOptions } from "./Card.levers";

/**
 * Content Component.
 * @param {*} param0
 * @returns
 */

export const Content = ({ children, className, align, ...props }) => {
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
      {...props}
    >
      {children}
    </FlexBox>
  );
};

Content.propTypes = {
  /**
   * Content horizontal alignment.
   */
  align: PropTypes.oneOf(cardAlignOptions),

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

Content.defaultProps = {
  align: "left",
};
