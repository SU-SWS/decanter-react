import React from 'react';
import PropTypes from 'prop-types';
import { IdentityBarColors } from './IdentityBar.levers';
import { Logo } from '../Logo/Logo';
import clsxd from 'clsx-dedupe';

/**
 * Stanford Identity Bar Component.
 *
 */
export const IdentityBar = ({ className, ...props }) => {
  const levers = {};

  // Levers
  // ---------------------------------------------------------------------------

  // props.color
  if (props.color && IdentityBarColors.includes(props.color)) {
    switch (props.color) {
      case 'white':
        levers.wrapper = 'su-bg-white';
        levers.logo = "cardinal-red";
        break;

      case 'cardinal-red':
        levers.wrapper = 'su-bg-cardinal-red';
        levers.logo = "white";
        break;

      case 'digital-red':
        levers.wrapper = 'su-bg-digital-red';
        levers.logo = "white";
        break;

      case 'black':
        levers.wrapper = 'su-bg-black';
        levers.logo = "white";
        break;
    }
  }

  return (
    <div className={clsxd('su-identity-bar su-pt-5 su-pb-1', levers.wrapper, className)}>
      <div className='su-cc'>
        <Logo className='su-text-20' color={levers.logo} type="full" />
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
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),
};

// Default Props.
// -----------------------------------------------------------------------------
IdentityBar.defaultProps = {
  color: 'cardinal-red'
};
