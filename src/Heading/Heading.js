import React from 'react';
import PropTypes from 'prop-types';
import { dcnb } from 'cnbuilder';
import {
  headingLevels,
  headingFonts,
  headingAlign,
  headingWeights,
  headingTracking,
  headingSizes,
} from './Heading.levers';
import intKeys from '../common/util/intKeys';

/**
 * Heading Component
 *
 */
export const Heading = ({
  className,
  level,
  font,
  weight,
  tracking,
  align,
  size,
  uppercase,
  italic,
  srOnly,
  children,
  ...props
}) => {
  // Defaults & Variables.
  // ---------------------------------------------------------------------------
  const levers = {};
  let HeadingTag = 'h2';

  // Levers
  // ---------------------------------------------------------------------------

  // props.level - allows number or string input
  if (
    level &&
    (headingLevels.includes(level) || headingLevels.includes(Number(level)))
  ) {
    HeadingTag = `h${level}`;
  }

  // props.font
  if (font && font in headingFonts) {
    levers.font = headingFonts[font];
  }

  // props.weight
  if (weight && weight in headingWeights) {
    levers.weight = headingWeights[weight];
  }

  // props.tracking
  if (tracking && tracking in headingTracking) {
    levers.tracking = headingTracking[tracking];
  }

  // props.align
  if (align && align in headingAlign) {
    levers.align = headingAlign[align];
  }

  // props.size
  if (size && size in headingSizes) {
    levers.size = headingSizes[size];
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
      className={dcnb(
        'su-leading-display',
        levers.font,
        levers.weight,
        levers.size,
        levers.tracking,
        levers.align,
        levers.uppercase,
        levers.italic,
        levers.srOnly,
        className
      )}
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
  font: PropTypes.oneOf(Object.keys(headingFonts)),

  /**
   * Optional - to override the default size for the heading level selected.
   * Step 0 = base font size; each step up is a factor of 1.25 of the previous.
   */
  size: PropTypes.oneOf(Object.keys(headingSizes).map((val) => intKeys(val))),

  /**
   * Text alignment.
   */
  align: PropTypes.oneOf(Object.keys(headingAlign)),

  /**
   * Font weight.
   */
  weight: PropTypes.oneOf(Object.keys(headingWeights)),

  /**
   * Letter spacing/tracking.
   */
  tracking: PropTypes.oneOf(Object.keys(headingTracking)),

  /**
   *
   */
  uppercase: PropTypes.bool,

  /**
   *
   */
  italic: PropTypes.bool,

  /**
   * Is this heading screen reader only? (not visible)
   */
  srOnly: PropTypes.bool,

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
Heading.defaultProps = {
  font: 'sans',
  weight: 'bold',
};
