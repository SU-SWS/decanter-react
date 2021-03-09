import React from 'react';
import PropTypes from 'prop-types';
import { headingLevels, headingFonts, headingAlign, headingWeights, headingTracking, headingSizes } from "./Heading.levers";
import clsxd from 'clsx-dedupe';

/**
 * Heading Component
 *
 */
export const Heading = ({ className, level = 2, font, weight, tracking, align, size, uppercase, italic, srOnly, children, ref, ...props }) => {
  // Defaults & Variables.
  // ---------------------------------------------------------------------------
  const levers = {};
  let HeadingTag = '';

  // Levers
  // ---------------------------------------------------------------------------

  // props.level - allows number or string input
  if (level && (headingLevels.includes(level) || headingLevels.includes(Number(level)))) {
    HeadingTag = 'h' + level;
  }

  // props.font
  if (font && headingFonts.includes(font)) {
    levers.font = `su-font-${font}`;
  }

  // props.weight
  if (weight && headingWeights.includes(weight)) {
    levers.weight = `su-font-${weight}`;
  }

  // props.tracking
  if (tracking && headingTracking.includes(tracking)) {
    levers.tracking = `su-tracking-${tracking}`;
  }

  // props.align
  if (align && headingAlign.includes(align)) {
    levers.align = `su-text-${align}`;
  }

  // props.size
  if (size !== null && headingSizes.includes(size)) {
    levers.size = `su-type-${size}`;
  }

  // props.uppercase
  if (uppercase) {
    levers.uppercase = `su-uppercase`;
  }

  // props.italic
  if (italic) {
    levers.italic = `su-italic`;
  }

  // props.srOnly
  if (srOnly) {
    levers.srOnly = `su-sr-only`;
  }


  return (
    <HeadingTag
      className={clsxd('su-leading-display', levers.font, levers.weight, levers.size, levers.tracking, levers.align, levers.uppercase, levers.italic, levers.srOnly, className)}
      ref={ref}
      {...props}
    >
      {children}
    </HeadingTag>
  );
};

Heading.propTypes = {
  level: PropTypes.oneOf(headingLevels),

  /**
   * Font family - sans serif, serif or slab?
   */
  font: PropTypes.oneOf(headingFonts),

  /**
   * Optional - to override the default size for the heading level selected.
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

  /**
   * Letter spacing/tracking.
   */
  tracking: PropTypes.oneOf(headingTracking),
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
