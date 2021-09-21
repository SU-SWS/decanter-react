import React from 'react';
import PropTypes from 'prop-types';
import { dcnb } from 'cnbuilder';

/**
 * Hero Component
 *
 * HTML card element
 */

const HeroRoot = ({ bgImage, className, children, imgClasses }) => (
  <div
    className={dcnb(
      'hero su-basefont-23 su-relative su-h-full su-max-h-500',
      className
    )}
  >
    <div
      className={dcnb(
        'su-h-full su-w-full su-overflow-hidden su-h-full su-max-h-500',
        imgClasses
      )}
    >
      <img
        className="su-h-full su-w-full su-object-cover su-object-center"
        src={bgImage}
        alt=""
      />
    </div>
    {children}
  </div>
);

HeroRoot.displayName = 'Hero';

/**
 * Exports
 */
export const Hero = Object.assign(HeroRoot, {});

// Prop Types.
// -----------------------------------------------------------------------------
HeroRoot.propTypes = {
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

  // Background Image
  bgImage: PropTypes.string,
};

// Default Props.
// -----------------------------------------------------------------------------
HeroRoot.defaultProps = {};
