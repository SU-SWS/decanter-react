import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../Logo/Logo';
import { lockupColors } from './Lockup.levers';
import clsxd from 'clsx-dedupe';

/**
 * Stanford Department Branding Component.
 *
 */
export const Lockup = ({ className, line1, ...props }) => {
  const levers = {};

  // Levers
  // ---------------------------------------------------------------------------

  // props.color
  if (props.color && lockupColors.includes(props.color)) {
    switch (props.color) {
      case 'default':
        levers.logo = 'cardinal-red';
        levers.text = 'su-link-black';
        break;

      case 'white':
        levers.logo = 'white';
        levers.text = 'su-link-white';
        break;
    }
  }

  return (
    <a className={clsxd('su-lockup', levers.link, className)}
       href={props.url}
    >
      <Logo color={levers.logo} isLink={false} />
      <div>{line1}</div>
    </a>
  );
};

// Prop Types.
// -----------------------------------------------------------------------------
Lockup.propTypes = {
  color: PropTypes.oneOf(lockupColors),
  url: PropTypes.string,

  /**
   * Custom CSS classes, e.g., to change font size
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),

  line1: PropTypes.string
};

// Default Props.
// -----------------------------------------------------------------------------
Lockup.defaultProps = {
  color: 'default',
  line1: 'Example Department'
};
