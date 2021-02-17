import React from 'react';
import PropTypes from 'prop-types';
import { IdentityBarColors } from './IdentityBar.levers';
import propTypes from "prop-types";

/**
 * Stanford Identity Bar Component.
 *
 */
export const IdentityBar = ({ className, ...props }) => {
  const classnames = require('classnames');
  const levers = {};

  // Levers
  // ---------------------------------------------------------------------------

  // props.color
  if (props.color && IdentityBarColors.includes(props.color)) {
    switch (props.color) {
      case 'white':
        levers.wrapper = classnames('su-bg-white');
        levers.logo = classnames('su-text-cardinal-red hover:su-text-cardinal-red focus:su-text-cardinal-red');
        break;

      case 'cardinal-red':
        levers.wrapper = classnames('su-bg-cardinal-red');
        levers.logo = classnames('su-text-white hover:su-text-white focus:su-text-white');
        break;

      case 'digital-red':
        levers.wrapper = classnames('su-bg-digital-red');
        levers.logo = classnames('su-text-white hover:su-text-white focus:su-text-white');
        break;

      case 'black':
        levers.wrapper = classnames('su-bg-black');
        levers.logo = classnames('su-text-white hover:su-text-white focus:su-text-white');
        break;
    }
  }

  return (
    <div className={classnames('su-identity-bar su-pt-5 su-pb-1', levers.wrapper, className)}>
      <div className='su-cc'>
        <a className={classnames('su-logo su-text-20', levers.logo)}>Stanford University</a>
      </div>
    </div>
  );
};

// Prop Types.
// -----------------------------------------------------------------------------
IdentityBar.propTypes = {
  /**
   * Which background color theme?
   */
  color: PropTypes.oneOf(IdentityBarColors),

  /**
   * Custom CSS classes, e.g., to control position
   */
  className: propTypes.oneOfType([
    propTypes.string,
    propTypes.array,
    propTypes.object
  ]),
};

// Default Props.
// -----------------------------------------------------------------------------
IdentityBar.defaultProps = {
  color: 'cardinal-red'
};
