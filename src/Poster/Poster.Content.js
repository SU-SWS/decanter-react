import { dcnb } from "cnbuilder";
import React from "react";
import PropTypes from "prop-types";
import { FlexBox } from "../FlexBox/FlexBox";

/**
 * Content Component.
 * @param {*} param0
 * @returns
 */

export const Content = ({ children, className, ...props }) => (
  <FlexBox
    direction="col"
    className={dcnb("poster-body su-max-w-700", className)}
    {...props}
  >
    {children}
  </FlexBox>
);

Content.displayName = "Poster.Content";

Content.propTypes = {
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

Content.defaultProps = {};
