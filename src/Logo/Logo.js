import React from 'react';
import PropTypes from 'prop-types';
import { dcnb } from 'cnbuilder';
import { logoColors, logoTypes } from './Logo.levers';

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
      case 'black':
        levers.logo = 'su-text-black hocus:su-text-black';
        break;

      case 'white':
        levers.logo = 'su-text-white hocus:su-text-white';
        break;

      case 'cardinal-red':
      default:
        levers.logo = 'su-text-cardinal-red';
        break;
    }
  }

  // props.type
  if (props.type && logoTypes.includes(props.type)) {
    switch (props.type) {
      case 'full':
        logoText = 'Stanford University';
        break;

      case 'stacked':
        logoText = (
          <>
            Stanford
            <br />
            University
          </>
        );
        break;

      case 'short':
      default:
        logoText = 'Stanford';
        break;
    }
  }

  // props.isLink
  // Render logo as link or simple div
  if (props.isLink) {
    return (
      <a
        className={dcnb('su-logo', levers.logo, className)}
        href="https://www.stanford.edu"
      >
        {logoText}
      </a>
    );
  }

  return (
    <div className={dcnb('su-logo', levers.logo, className)}>{logoText}</div>
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
    PropTypes.object,
  ]),
};

// Default Props.
// -----------------------------------------------------------------------------
Logo.defaultProps = {
  color: 'cardinal-red',
  type: 'short',
  isLink: true,
};
