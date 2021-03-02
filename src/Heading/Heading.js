import React from 'react';
import PropTypes from 'prop-types';
import { headingLevels, headingFonts, headingAlign, headingWeights, headingSizes } from "./Heading.levers";
import clsxd from 'clsx-dedupe';

/**
 * Heading Component
 *
 */
export const Heading = ({ className, children, ref, ...props }) => {
  // Defaults & Variables.
  // ---------------------------------------------------------------------------
  const levers = {};
  let HeadingTag = 'h3';

  // Levers
  // ---------------------------------------------------------------------------

  // props.defaultLevel
  if (props.defaultLevel && headingLevels.includes(props.defaultLevel)) {
    HeadingTag = props.defaultLevel;
  }

  // props.level
  if (props.level && headingLevels.includes(props.level)) {
    HeadingTag = props.level;
  }

  // props.font
  if (props.font && headingFonts.includes(props.font)) {
    levers.font = `su-font-${props.font}`;
  }

  // props.weight
  if (props.weight && headingWeights.includes(props.weight)) {
    levers.weight = `su-font-${props.weight}`;
  }

  // props.align
  if (props.align && headingAlign.includes(props.align)) {
    levers.align = `su-text-${props.align}`;
  }

  // props.size
  if (props.size !== null && headingSizes.includes(props.size)) {
    levers.size = `su-type-${props.size}`;
  }

  // props.uppercase
  if (props.uppercase) {
    levers.uppercase = `su-uppercase`;
  }

  // props.italic
  if (props.italic) {
    levers.italic = `su-italic`;
  }

  // props.srOnly
  if (props.srOnly) {
    levers.srOnly = `su-sr-only`;
  }


  return (
    <HeadingTag
      className={clsxd('su-leading-display', levers.font, levers.weight, levers.size, levers.align, levers.uppercase, levers.italic, levers.srOnly, className)}
      ref={ref}
    >
      {children}
    </HeadingTag>
  );
};

Heading.propTypes = {
  level: PropTypes.oneOf(headingLevels),
  defaultLevel: PropTypes.oneOf(headingLevels),
  /**
   * Font family - sans serif, serif or slab?
   */
  font: PropTypes.oneOf(headingFonts),

  /**
   * Step 0 = base font size; each step up is a factor of 1.25 of the previous.
   */
  size: PropTypes.oneOf(headingSizes),

  /**
   * Text alignment.
   */
  align: PropTypes.oneOf(headingAlign),

  /**
   * Font weight.
   */
  weight: PropTypes.oneOf(headingWeights),
  uppercase: PropTypes.bool,
  italic: PropTypes.bool,

  /**
   * Is this heading screen reader only? (not visible)
   */
  srOnly: PropTypes.bool,

  // CSS Classes.
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),

  // Children
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node
  ])
};

// Default Props.
// -----------------------------------------------------------------------------
Heading.defaultProps = {
  font: 'sans',
  weight: 'bold',
  ref: null
};
