import React from 'react';
import PropTypes from 'prop-types';
import { logoColors, logoTypes } from './Logo.levers';
import clsxd from 'clsx-dedupe';

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
  if (props.color && logoColors.includes(props.color)) {
    switch (props.color) {
      case 'cardinal-red':
        levers.logo = 'su-text-cardinal-red';
        break;

      case 'black':
        levers.logo = 'su-text-black hocus:su-text-black';
        break;

      case 'white':
        levers.logo = 'su-text-white hocus:su-text-white';
        break;
    }
  }

  // props.type
  if (props.type && logoTypes.includes(props.type)) {
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

  // Render logo as link or simple div
  if (props.isLink) {
    return (
      <a className={clsxd('su-logo', levers.logo, className)}
         href='https://www.stanford.edu'
      >
        {logoText}
      </a>
    );
  }

  return (
    <div className={clsxd('su-logo', levers.logo, className)}>
      {logoText}
    </div>
  );
};

// Prop Types.
// -----------------------------------------------------------------------------
Logo.propTypes = {
  color: PropTypes.oneOf(logoColors),
  type: PropTypes.oneOf(logoTypes),

  /**
   * Make the logo link to the Stanford homepage?
   */
  isLink: PropTypes.bool,

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
  type: 'short',
  isLink: true
};
