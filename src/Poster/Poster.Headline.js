import PropTypes from "prop-types";
import { dcnb } from "cnbuilder";
import React from "react";
import { Heading } from "../Heading/Heading";
import {
  headingFonts,
  headingLevels,
  headingSizes,
  headingWeights,
} from "../Heading/Heading.levers";
import intKeys from "../common/util/intKeys";

/**
 * Headline component
 * @param {*} param0
 * @returns
 */

export const Headline = ({
  children,
  level,
  size,
  weight,
  font,
  className,
  ...props
}) => (
  <Heading
    level={level}
    size={size}
    font={font}
    weight={weight}
    {...props}
    className={dcnb("su-mb-03em", className)}
  >
    {children}
  </Heading>
);

Headline.displayName = "Poster.Headline";

Headline.propTypes = {
  level: PropTypes.oneOf(headingLevels),

  /**
   * Optional - to override the default size for the heading level selected.
   * Step 0 = base font size; each step up is a factor of 1.25 of the previous.
   */
  size: PropTypes.oneOf(Object.keys(headingSizes).map((val) => intKeys(val))),

  /**
   * Font family - sans serif, serif or slab?
   */
  font: PropTypes.oneOf(Object.keys(headingFonts)),

  /**
   * Font weight.
   */
  weight: PropTypes.oneOf(Object.keys(headingWeights)),

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

// Default Props.
// -----------------------------------------------------------------------------
Headline.defaultProps = {
  level: 2,
  size: 3,
  weight: "bold",
  font: "serif",
};
