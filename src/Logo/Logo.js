import React from 'react'
import PropTypes from 'prop-types';
import { LogoColors, LogoTypes } from './Logo.levers';
import clsx from 'clsx';

/**
 * Stanford Wordmark Logo Component.
 *
 */
export const Logo = ({ className, ...props }) => {
  const levers = {};
  let logoText;

  // Levers
  // ---------------------------------------------------------------------------

  // props.color
  if (props.color && LogoColors.includes(props.color)) {
    switch (props.color) {
      case 'cardinal-red':
        levers.logo = clsx('su-text-cardinal-red');
        break;

      case 'black':
        levers.logo = clsx('su-text-black hover:su-text-black focus:su-text-black');
        break;

      case 'white':
        levers.logo = clsx('su-text-white hover:su-text-white focus:su-text-white');
        break;
    }
  }

  // props.type
  if (props.type && LogoTypes.includes(props.type)) {
    switch (props.type) {
      case 'short':
        logoText = 'Stanford';
        break;

      case 'full':
        logoText = 'Stanford University';
        break;

      case 'stacked':
        logoText = (<>Stanford<br />University</>);
        break;
    }
  }

  return (
    <a className={clsx('su-logo', levers.logo, className)}
       href='https://www.stanford.edu'
    >
      {logoText}
    </a>
  );
};

// Prop Types.
// -----------------------------------------------------------------------------
Logo.propTypes = {
  color: PropTypes.oneOf(LogoColors),
  type: PropTypes.oneOf(LogoTypes),

  /**
   * Custom CSS classes, e.g., to change font size
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),
};

// Default Props.
// -----------------------------------------------------------------------------
Logo.defaultProps = {
  color: 'cardinal-red',
  type: 'short'
};
